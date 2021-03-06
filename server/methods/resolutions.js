import {Resolutions} from '../../lib/collections'
import {Meteor} from 'meteor/meteor'
import {check} from 'meteor/check'

export default function() {
    Meteor.methods({
        'resolution.create'(text) {
            check(text, String)

            Resolutions.insert({
                text: text,
                complete: false,
                createdAt: new Date()
            })
        },
        'resolution.toggle'(id, status) {
            check(id, String)
            check(status, Boolean)

            Resolutions.update(id, {
                $set: {complete: !status}
            })
        }
    })

    Meteor.methods({
        'resolution.delete'(id) {
            check(id, String)

            Resolutions.remove(id)
        }
    })
}