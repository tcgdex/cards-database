import { Card } from "../../../interfaces"
import Set from "../Mega Evolution"

const card: Card = {
	set: Set,

	name: {
		en: "Mega Venusaur ex",
		fr: "Méga-Florizarre-ex",
		de: "Mega-Bisaflor-ex",
		it: "Mega Venusaur-ex",
		es: "Mega Venusaur ex",
		pt: "Mega Venusaur ex",
		'es-mx': "Mega Venusaur ex"
	},

	illustrator: "5ban Graphics",
	rarity: "Double rare",
	category: "Pokemon",
	hp: 380,
	types: ["Grass"],
	stage: "Stage2",
	dexId: [3],

	abilities: [{
		type: "Ability",

		name: {
			en: "Solar Transfer",
			fr: "Transfert Solaire",
			de: "Solartransfer",
			it: "Transfer Solare",
			es: "Traspaso Solar",
			pt: "Transferência Solar",
			'es-mx': "Transferencia Solar"
		},

		effect: {
			en: "As often as you like during your turn, you may use this Ability. Move a Basic {G} Energy from 1 of your Pokémon to another of your Pokémon.",
			fr: "Autant de fois que vous le voulez pendant votre tour, vous pouvez utiliser ce talent. Déplacez une Énergie {G} de base de l'un de vos Pokémon vers un autre de vos Pokémon.",
			de: "Beliebig oft während deines Zuges kannst du diese Fähigkeit einsetzen. Verschiebe 1 Basis-{G}-Energie von 1 deiner Pokémon auf 1 anderes deiner Pokémon.",
			it: "Durante il tuo turno, puoi usare questa abilità tutte le volte che vuoi. Sposta un'Energia base {G} da uno dei tuoi Pokémon a un altro dei tuoi Pokémon.",
			es: "Todas las veces que quieras durante tu turno, puedes usar esta habilidad. Mueve 1 Energía {G} Básica de uno de tus Pokémon a otro de tus Pokémon.",
			pt: "Quantas vezes desejar durante o seu turno, você poderá usar esta Habilidade. Mova uma Energia {G} Básica de 1 dos seus Pokémon para outro Pokémon seu.",
			'es-mx': "Cuantas veces quieras durante tu turno, puedes usar esta Habilidad. Mueve 1 Energía {G} Básica de 1 de tus Pokémon a otro de tus Pokémon."
		}
	}],

	attacks: [{
		cost: ["Grass", "Grass", "Grass", "Grass"],

		name: {
			en: "Jungle Dump",
			fr: "Rejet de Jungle",
			de: "Dschungelhalde",
			it: "Impatto della Giungla",
			es: "Descarga Selvática",
			pt: "Selva Entulhada",
			'es-mx': "Descarga Selvática"
		},

		effect: {
			en: "Heal 30 damage from this Pokémon.",
			fr: "Soignez 30 dégâts de ce Pokémon.",
			de: "Heile 30 Schadenspunkte bei diesem Pokémon.",
			it: "Cura questo Pokémon da 30 danni.",
			es: "Cura 30 puntos de daño a este Pokémon.",
			pt: "Cure 30 pontos de dano deste Pokémon.",
			'es-mx': "Cura 30 puntos de daño a este Pokémon."
		},

		damage: 240
	}],

	retreat: 4,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 654342
	}
}

export default card