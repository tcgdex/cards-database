import { Card } from "../../../interfaces"
import Set from "../Perfect Order"

const card: Card = {
	set: Set,

	name: {
		en: "Amaura",
		fr: "Amagara",
		es: "Amaura",
		'es-mx': "Amaura",
		de: "Amarino",
		it: "Amaura",
		pt: "Amaura"
	},

	illustrator: "Hitoshi Ariga",
	rarity: "Common",
	category: "Pokemon",
	hp: 100,
	types: ["Water"],
	stage: "Stage1",

	attacks: [{
		cost: ["Water", "Colorless"],

		name: {
			en: "Icy Wind",
			fr: "Vent Glace",
			es: "Viento Hielo",
			'es-mx': "Viento Helado",
			de: "Eissturm",
			it: "Ventogelato",
			pt: "Vento Congelante"
		},

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep.",
			fr: "Le Pokémon Actif de votre adversaire est maintenant Endormi.",
			es: "El Pokémon Activo de tu rival pasa a estar Dormido.",
			'es-mx': "El Pokémon Activo de tu rival ahora está Dormido.",
			de: "Das Aktive Pokémon deines Gegners schläft jetzt.",
			it: "Il Pokémon attivo del tuo avversario viene addormentato.",
			pt: "O Pokémon Ativo do seu oponente agora está Adormecido."
		},

		damage: 50
	}],

	retreat: 3,
	regulationMark: "J",

	thirdParty: {
		tcgplayer: 684355,
		cardmarket: 877435
	}
}

export default card