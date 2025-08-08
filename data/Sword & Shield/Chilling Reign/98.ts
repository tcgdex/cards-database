import { Card } from '../../../interfaces'
import Set from '../Chilling Reign'

const card: Card = {
	dexId: [199],
	set: Set,

	name: {
		en: "Galarian Slowking",
		fr: "Roigada de Galar",
		es: "Slowking de Galar",
		it: "Slowking di Galar",
		pt: "Slowking de Galar",
		de: "Galar-Laschoking"
	},

	illustrator: "Naoki Saito",
	rarity: "Holo Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Darkness"],

	evolveFrom: {
		en: "Galarian Slowpoke",
		fr: "Ramoloss de Galar",
		es: "Slowpoke de Galar",
		it: "Slowpoke di Galar",
		pt: "Slowpoke de Galar",
		de: "Galar-Flegmon"
	},

	abilities: [{
		type: "Ability",

		name: {
			en: "Mysterious Potion",
			fr: "Potion Mystérieuse",
			es: "Poción Misteriosa",
			it: "Pozione Misteriosa",
			pt: "Poção Misteriosa",
			de: "Geheimnisvoller Trank"
		},

		effect: {
			en: "Once during your turn, you may choose 1 of your Pokémon and flip a coin. If heads, heal 90 damage from that Pokémon. If tails, put 3 damage counters on that Pokémon.",
			fr: "Une fois pendant votre tour, vous pouvez choisir l'un de vos Pokémon et lancer une pièce. Si c'est face, soignez 90 dégâts de ce Pokémon-là. Si c'est pile, placez 3 marqueurs de dégâts sur ce même Pokémon.",
			es: "Una vez durante tu turno, puedes elegir 1 de tus Pokémon y lanzar 1 moneda. Si sale cara, cura 90 puntos de daño a ese Pokémon. Si sale cruz, pon 3 contadores de daño en ese Pokémon.",
			it: "Una sola volta durante il tuo turno, puoi scegliere uno dei tuoi Pokémon e lanciare una moneta. Se esce testa, cura quel Pokémon da 90 danni. Se esce croce, metti tre segnalini danno sul quel Pokémon.",
			pt: "Uma vez durante o seu turno, você poderá escolher 1 dos seus Pokémon e jogar 1 moeda. Se sair cara, cure 90 pontos de dano daquele Pokémon. Se sair coroa, coloque 3 contadores de dano naquele Pokémon.",
			de: "Einmal während deines Zuges kannst du 1 deiner Pokémon wählen und 1 Münze werfen. Heile bei Kopf 90 Schadenspunkte bei jenem Pokémon. Lege bei Zahl 3 Schadensmarken auf jenes Pokémon."
		}
	}],

	attacks: [{
		name: {
			en: "Spray Fluid",
			fr: "Fluide Éclaboussant",
			es: "Fluido Rociado",
			it: "Fluidospray",
			pt: "Fluido Spray",
			de: "Sprühwasser"
		},

		damage: 90,
		cost: ["Darkness", "Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Fighting",
		value: "×2"
	}],

	retreat: 3,
	regulationMark: "E",

	variants: {
		normal: false,
		reverse: true,
		holo: true,
		firstEdition: false
	},

	stage: "Stage1",

	description: {
		en: "While chanting strange spells, this Pokémon combines its internal toxins with what it's eaten, creating strange potions."
	}
}

export default card
