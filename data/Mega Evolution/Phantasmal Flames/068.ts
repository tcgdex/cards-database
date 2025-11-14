import { Card } from "../../../interfaces"
import Set from "../Phantasmal Flames"

const card: Card = {
	set: Set,

	name: {
		en: "Toxtricity",
		fr: "Salarsen",
		es: "Toxtricity",
		'es-mx': "Toxtricity",
		de: "Riffex",
		it: "Toxtricity",
		pt: "Toxtricity"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 140,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Sinister Surge",
			fr: "Déferlante Sinistre",
			es: "Sobrecarga Siniestra",
			'es-mx': "Sobrecarga Siniestra",
			de: "Unheilvolle Spannung",
			it: "Sbalzo Sinistro",
			pt: "Surto Sinistro"
		},

		effect: {
			en: "Once during your turn, you may use this Ability. Search your deck for a Basic {D} Energy card and attach it to 1 of your Benched {D} Pokémon. Then, shuffle your deck. If you attached Energy to a Pokémon in this way, place 2 damage counters on that Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez utiliser ce talent. Cherchez dans votre deck une carte Énergie {D} de base, puis attachez-la à l'un de vos Pokémon {D} de Banc. Mélangez ensuite votre deck. Si vous avez attaché de l'Énergie à un Pokémon de cette façon, placez 2 marqueurs de dégâts sur ce Pokémon-là.",
			es: "Una vez durante tu turno, puedes usar esta habilidad. Busca en tu baraja 1 carta de Energía {D} Básica y únela a uno de tus Pokémon {D} en Banca. Después, baraja las cartas de tu baraja. Si has unido Energía a un Pokémon de esta manera, pon 2 contadores de daño en ese Pokémon.",
			'es-mx': "Una vez durante tu turno, puedes usar esta Habilidad. Busca en tu mazo 1 carta de Energía {D} Básica y únela a 1 de tus Pokémon {D} en Banca. Después, baraja tu mazo. Si uniste Energía a algún Pokémon de esta manera, pon 2 contadores de daño en ese Pokémon.",
			de: "Einmal während deines Zuges kannst du diese Fähigkeit einsetzen. Durchsuche dein Deck nach 1 Basis-{D}-Energiekarte und lege sie an 1 {D}-Pokémon auf deiner Bank an. Mische anschließend dein Deck. Wenn du auf diese Weise Energie an ein Pokémon angelegt hast, lege 2 Schadensmarken auf jenes Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi usare questa abilità. Cerca nel tuo mazzo una carta Energia base {D} e assegnala a uno dei Pokémon {D} nella tua panchina. Poi rimischia il tuo mazzo. Se hai assegnato dell'Energia a un Pokémon in questo modo, metti due segnalini danno su quel Pokémon.",
			pt: "Uma vez durante o seu turno, você poderá usar esta Habilidade. Procure por uma carta de Energia {D} Básica no seu baralho e ligue-a a 1 dos seus Pokémon {D} no Banco. Em seguida, embaralhe o seu baralho. Se você ligou Energia a um Pokémon desta forma, coloque 2 contadores de dano naquele Pokémon."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Darkness", "Colorless"],

		name: {
			en: "Gentle Slap",
			fr: "Gifle Douce",
			es: "Bofetada Gentil",
			'es-mx': "Cachetadita",
			de: "Sanfter Hieb",
			it: "Schiaffetto",
			pt: "Tapinha"
		},

		damage: 100
	}],

	retreat: 2,
	regulationMark: "I"
}

export default card