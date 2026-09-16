import { Card } from "../../../interfaces"
import Set from "../30th Celebration"

const card: Card = {
	set: Set,

	name: {
		en: "Zacian",
		fr: "Zacian",
		de: "Zacian",
		es: "Zacian",
		it: "Zacian",
		'es-mx': "Zacian"
	},

	illustrator: "AKIRA EGAWA",
	rarity: "Rare",
	category: "Pokemon",
	hp: 130,
	types: ["Metal"],
	stage: "Basic",

	attacks: [{
		name: {
			en: "Hardened Blade",
			fr: "Lame Durcie",
			de: "Gehärtete Klinge",
			es: "Tajo Fortachón",
			it: "Lama Temprata",
			'es-mx': "Cuchilla Templada"
		},

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 40 more damage.",
			fr: "Si un Outil Pokémon est attaché à ce Pokémon, cette attaque inflige 40 dégâts supplémentaires.",
			de: "Wenn an dieses Pokémon 1 Pokémon-Ausrüstung angelegt ist, fügt diese Attacke 40 Schadenspunkte mehr zu.",
			es: "Si este Pokémon tiene una Herramienta Pokémon unida, este ataque hace 40 puntos de daño más.",
			it: "Se questo Pokémon ha una carta Oggetto Pokémon assegnata, questo attacco infligge 40 danni in più.",
			'es-mx': "Si este Pokémon tiene alguna Herramienta Pokémon unida, este ataque hace 40 puntos de daño más."
		},

		damage: "20+",
		cost: ["Metal"]
	}, {
		name: {
			en: "Slashing Strike",
			fr: "Coup Déchirant",
			de: "Schlitzender Schlag",
			es: "Golpe Cuchillazo",
			it: "Lacerattacco",
			'es-mx': "Golpe Cortante"
		},

		effect: {
			en: "During your next turn, this Pokémon can't use Slashing Strike.",
			fr: "Pendant votre prochain tour, ce Pokémon ne peut pas utiliser Coup Déchirant.",
			de: "Während deines nächsten Zuges kann dieses Pokémon Schlitzender Schlag nicht einsetzen.",
			es: "Durante tu próximo turno, este Pokémon no puede usar Golpe Cuchillazo.",
			it: "Durante il tuo prossimo turno, questo Pokémon non può usare Lacerattacco.",
			'es-mx': "Durante tu próximo turno, este Pokémon no puede usar Golpe Cortante."
		},

		damage: 120,
		cost: ["Metal", "Metal", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "×2"
	}],

	resistances: [{
		type: "Grass",
		value: "-30"
	}],

	retreat: 2
}

export default card