import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	dexId: [262],

	name: {
		en: "Mightyena",
		fr: "Grahyèna",
		es: "Mightyena",
		'es-mx': "Mightyena",
		de: "Magnayen",
		it: "Mightyena",
		pt: "Mightyena"
	},

	illustrator: "Yano Keiji",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],
	stage: "Stage1",

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			en: "Kick Away",
			fr: "Coud'Pied Éjecteur",
			es: "Patadón",
			'es-mx': "Patadón",
			de: "Wegkicken",
			it: "Calciavia",
			pt: "Chutar para Longe"
		},

		effect: {
			en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)",
			fr: "Envoyez le Pokémon Actif de l'adversaire sur le Banc. (Votre adversaire choisit le nouveau Pokémon Actif.)",
			es: "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			'es-mx': "Mueve el Pokémon Activo de tu rival a la Banca. (Tu rival elige el nuevo Pokémon Activo).",
			de: "Wechsle das Aktive Pokémon deines Gegners auf seine Bank aus. (Dein Gegner wählt das neue Aktive Pokémon.)",
			it: "Sposta il Pokémon attivo del tuo avversario nella sua panchina. Il tuo avversario sceglie il nuovo Pokémon attivo.",
			pt: "Mande o Pokémon Ativo do seu oponente para o Banco. (O seu oponente escolhe o novo Pokémon Ativo.)"
		},

		damage: 50
	}, {
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Sharp Fang",
			fr: "Croc Aiguisé",
			es: "Colmillo Afilado",
			'es-mx': "Colmillo Afilado",
			de: "Scharfe Fänge",
			it: "Zannaffilata",
			pt: "Presa Afiada"
		},

		damage: 130
	}],

	retreat: 2,
	regulationMark: "H",

	thirdParty: {
		tcgplayer: 676055,
		cardmarket: 869854
	}
}

export default card
