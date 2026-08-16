import { Card } from '../../../interfaces'
import Set from '../Ruby & Sapphire'

const card: Card = {
	name: {
		en: "Oran Berry",
		fr: "Baie Oran",
		de: "Sinelbeere"
	},

	illustrator: "Kazuo Yazawa",
	rarity: "Uncommon",
	category: "Trainer",
	set: Set,
	trainerType: "Tool",

	effect: {
		en: "Attach Oran Berry to 1 of your Pokémon that doesn't already have a Pokémon Tool attached to it. If that Pokémon is Knocked Out, discard this card. At any time between turns, if the Pokémon this card is attached to has at least 2 damage counters on it, remove 2 damage counters from it. Then discard Oran Berry.",
		fr: "Attachez Baie Oran à un de vos Pokémon qui n'a pas déjà d'Outil Pokémon. Si ce Pokémon est mis K.O, défaussez cette carte.\n\nN'importe quand entre deux tours, si le Pokémon auquel cette carte est attachée possède au moins deux marqueurs de dégât, retirez-les lui. Ensuite, défaussez Baie Oran.",
		de: "Lege Sinelbeere an 1 deiner Pokémon an, das keine Pokémon-Ausrüstung hat. Wenn das Pokémon kampfunfähig gemacht wird, lege Sinelbeere auf den Ablagestapel. Wenn zu irgendeinem Zeitpunkt zwischen den Zügen auf dem Pokémon, an dem die Sinelbeere angelegt ist, mindestens 2 Schadensmarken liegen, entferne 2 Schadensmarken von dem Pokémon. Lege Sinelbeere danach auf deinen Ablagestapel."
	},


	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 275733,
				tcgplayer: 87888
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 275733,
				tcgplayer: 87888
			}
		},
	],

	retreat: 0
}

export default card
