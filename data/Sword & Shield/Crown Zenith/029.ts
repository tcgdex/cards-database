import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [86],
	set: Set,

	name: {
		en: "Seel",
		fr: "Otaria",
		es: "Seel",
		it: "Seel",
		pt: "Seel",
		de: "Jurob"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Water"],
	stage: "Basic",

	attacks: [{
		cost: ["Water"],

		name: {
			en: "Headbutt",
			fr: "Coup d'Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			de: "Kopfnuss"
		},

		damage: 10
	}, {
		cost: ["Water", "Colorless"],

		name: {
			en: "Rain Splash",
			fr: "Pluie Éclaboussante",
			es: "Golpe de Lluvia",
			it: "Spruzzapioggia",
			pt: "Chuva Borrifante",
			de: "Regenplatscher"
		},

		damage: 20
	}],

	weaknesses: [
		{
			type: "Lightning",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		en: "Thanks to its thick fat, cold seas don't bother it at all, but it gets tired pretty easily in warm waters.",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691746,
				tcgplayer: 478128
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691746,
				tcgplayer: 478128
			}
		},
	],
}

export default card
