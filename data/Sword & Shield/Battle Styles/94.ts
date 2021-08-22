import { Card } from '../../../interfaces'
import Set from '../Battle Styles'

const card: Card = {
	set: Set,

	name: {
		en: "Honchkrow",
		fr: "Corboss",
		es: "Honchkrow",
		it: "Honchkrow",
		pt: "Honchkrow",
		de: "Kramshef"
	},

	illustrator: "Miki Tanaka",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 130,
	types: ["Darkness"],

	evolveFrom: {
		en: "Murkrow",
		fr: "Cornèbre"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Insomnia",
			fr: "Insomnia",
			es: "Insomnio",
			it: "Insonnia",
			pt: "Insônia",
			de: "Insomnia"
		},

		effect: {
			en: "This Pokémon can’t be Asleep.",
			fr: "Ce Pokémon ne peut pas être Endormi.",
			es: "Este Pokémon no puede pasar a estar Dormido.",
			it: "Questo Pokémon non può venire addormentato.",
			pt: "Este Pokémon não pode ser Adormecido.",
			de: "Dieses Pokémon kann nicht von Schlaf betroffen werden."
		}
	}],

	attacks: [{
		name: {
			en: "Voltage Dive",
			fr: "Plongée Voltaïque",
			es: "Picado Voltaje",
			it: "Picchiata Voltaica",
			pt: "Mergulho Voltaico",
			de: "Volttaucher"
		},

		effect: {
			en: "If your opponent’s Active Pokémon has any Special Energy attached, this attack does 80 more damage.",
			fr: "Si de l’Énergie spéciale est attachée au Pokémon Actif de votre adversaire, cette attaque inflige 80 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival tiene alguna Energía Especial unida a él, este ataque hace 80 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario ha delle Energie speciali assegnate, questo attacco infligge 80 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente tiver alguma Energia Especial ligada a ele, este ataque causará 80 pontos de dano a mais.",
			de: "Wenn an das Aktive Pokémon deines Gegners mindestens 1 Spezial-Energie angelegt ist, fügt diese Attacke 80 Schadenspunkte mehr zu."
		},

		damage: "80+",
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 2,
	regulationMark: "E",

	variants: {
		normal: true,
		reverse: true,
		holo: false,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "Its goons take care of most of the fighting for it. The only time it dirties its own hands is in delivering a final blow to finish off an opponent."
	}
}

export default card