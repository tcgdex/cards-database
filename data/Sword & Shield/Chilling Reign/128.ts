import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Greedent",
		fr: "Rongrigou"
	},

	illustrator: "HYOGONOSUKE",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		en: "Skwovet",
		fr: "Rongourmand"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Brazen Tail",
			fr: "Queue Effrontée"
		},

		effect: {
			en: "Energy attached to your Pokémon can’t be put into your hand, deck, or discard pile by an effect of your opponent’s Item or Supporter cards.",
			fr: "L’Énergie attachée à vos Pokémon ne peut pas être placée dans votre main, deck ou pile de défausse par les effets des cartes Objet ou Supporter de votre adversaire."
		}
	}],

	attacks: [{
		name: {
			en: "Gnaw",
			fr: "Ronge"
		},

		damage: 90,
		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 1,
	regulationMark: "E"
}

export default card