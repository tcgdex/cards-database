import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Shuckle",
		fr: "Caratroc",
		de: "Pottrott",
		it: "Shuckle",
		es: "Shuckle",
		pt: "Shuckle",
		'es-mx': "Shuckle"
	},

	illustrator: "OKUBO",
	rarity: "Illustration rare",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Basic",
	dexId: [213],

	abilities: [{
		type: "Ability",

		name: {
			en: "Fermented Juice",
			fr: "Jus Fermenté",
			de: "Fermentierter Saft",
			it: "Succo Fermentato",
			es: "Zumo Fermentado",
			pt: "Suco Choco",
			'es-mx': "Jugo Fermentado"
		},

		effect: {
			en: "Once during your turn, if this Pokémon has any {G} Energy attached, you may use this Ability. Heal 30 damage from 1 of your Pokémon.",
			fr: "Une fois pendant votre tour, si ce Pokémon a au moins une Énergie {G} attachée, vous pouvez utiliser ce talent. Soignez 30 dégâts de l'un de vos Pokémon.",
			de: "Einmal während deines Zuges, wenn an dieses Pokémon mindestens 1 {G}-Energie angelegt ist, kannst du diese Fähigkeit einsetzen. Heile 30 Schadenspunkte bei 1 deiner Pokémon.",
			it: "Una sola volta durante il tuo turno, se questo Pokémon ha delle Energie {G} assegnate, puoi usare questa abilità. Cura uno dei tuoi Pokémon da 30 danni.",
			es: "Una vez durante tu turno, si este Pokémon tiene alguna Energía {G} unida, puedes usar esta habilidad. Cura 30 puntos de daño a uno de tus Pokémon.",
			pt: "Uma vez durante o seu turno, se este Pokémon tiver alguma Energia {G} ligada a ele, você poderá usar esta Habilidade. Cure 30 pontos de dano de 1 dos seus Pokémon.",
			'es-mx': "Una vez durante tu turno, si este Pokémon tiene alguna Energía {G} unida, puedes usar esta Habilidad. Cura 30 puntos de daño a 1 de tus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Rollout",
			fr: "Roulade",
			de: "Walzer",
			it: "Rotolamento",
			es: "Rodar",
			pt: "Rolagem",
			'es-mx': "Rodada"
		},

		damage: 30
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654475
	}
}

export default card