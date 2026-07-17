import { Card } from "../../../interfaces"
import Set from "../Pitch Black"

const card: Card = {
	set: Set,

	description: {
		en: "The final factor needed to release this Pokémon's true power was a strong bond with a Trainer it trusts.",
		de: "Der entscheidende Faktor, durch den es seine wahren Kräfte freisetzen kann, ist die enge Bindung zu einem Trainer, dem es vertraut."
	},

	name: {
		en: "Silvally",
		fr: "Silvallié",
		es: "Silvally",
		'es-mx': "Silvally",
		de: "Amigento"
	},

	illustrator: "Takumi Wada",
	rarity: "Rare",
	category: "Pokemon",
	dexId: [773],
	hp: 140,
	types: ["Colorless"],

	evolveFrom: {
		en: "Type: Null"
	},

	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Call a Buddy",
			de: "Kumpelruf"
		},

		effect: {
			en: "Once during your turn (before your attack), if you have 0 cards in your hand, you may search your deck for a Supporter card, reveal it, and put it into your hand. Then shuffle your deck.",
			de: "Einmal während deines Zuges, wenn du keine Karten auf deiner Hand hast, kannst du diese Fähigkeit einsetzen. Durchsuche dein Deck nach 1 Unterstützerkarte, zeige sie deinem Gegner und nimm sie auf deine Hand. Mische anschließend dein Deck."
		}
	}],

	attacks: [{
		name: {
			en: "Air Slash",
			de: "Luftschnitt"
		},

		cost: ["Colorless"],

		damage: 130,

		effect: {
			en: "Discard 1 Energy from this Pokémon.",
			de: "Lege 1 Energie von diesem Pokémon auf deinen Ablagestapel."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 2,
	regulationMark: "J",

	variants: [
		{
			type: "holo",
			thirdParty: {
				cardmarket: 895854,
				tcgplayer: 704827
			}
		},
	],
}

export default card
