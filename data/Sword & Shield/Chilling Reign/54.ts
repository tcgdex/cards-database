import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	set: Set,

	name: {
		en: "Galarian Slowpoke",
		fr: "Ramoloss de Galar",
		es: "Slowpoke de Galar",
		it: "Slowpoke di Galar",
		pt: "Slowpoke de Galar",
		de: "Galar-Flegmon"
	},

	illustrator: "Naoyo Kimura",
	rarity: "Common",
	category: "Pokemon",
	hp: 70,
	types: ["Psychic"],

	attacks: [{
		name: {
			en: "Sharpness",
			fr: "Intellection",
			es: "Agudeza",
			it: "Acume",
			pt: "Espertinho",
			de: "Schärfe"
		},

		damage: 10,
		cost: ["Colorless"]
	}, {
		name: {
			en: "Headbutt",
			fr: "Coup d’Boule",
			es: "Golpe Cabeza",
			it: "Bottintesta",
			pt: "Cabeçada",
			de: "Kopfnuss"
		},

		damage: 20,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Darkness",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E"
}

export default card