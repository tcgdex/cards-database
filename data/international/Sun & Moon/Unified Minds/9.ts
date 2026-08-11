import { Card } from 'models/database/card'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		'en-us': "Leavanny",
		'fr-fr': "Manternel",
		'es-es': "Leavanny",
		'it-it': "Leavanny",
		'pt-br': "Leavanny",
		'de-de': "Matrifol"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		542,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		'en-us': "Swadloon",
		'fr-fr': "Couverdure",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Blanket Weaver",
				'fr-fr': "Tisserand de Couvertures",
				'es-es': "Tejemantas",
				'it-it': "Tessimanto",
				'pt-br': "Cobertor de Folhas",
				'de-de': "Deckenflechter"
			},
			effect: {
				'en-us': "Your Grass Pokémon take 40 less damage from your opponent’s attacks (after applying Weakness and Resistance). You can’t apply more than 1 Blanket Weaver Ability at a time.",
				'fr-fr': "Vos Pokémon Grass subissent 40 dégâts de moins provenant des attaques de votre adversaire (après application de la Faiblesse et de la Résistance). Vous ne pouvez pas utiliser plus d’un talent Tisserand de Couvertures à la fois.",
				'es-es': "Los ataques de tu rival hacen 40 puntos de daño menos a tus Pokémon Grass (después de aplicar Debilidad y Resistencia). No puedes aplicar más de 1 habilidad Tejemantas a la vez.",
				'it-it': "I tuoi Pokémon Grass subiscono 40 danni in meno dagli attacchi del tuo avversario, dopo aver applicato debolezza e resistenza. Può essere applicata solo un’abilità Tessimanto alla volta.",
				'pt-br': "Seus Pokémon Grass recebem 40 pontos de dano a menos dos ataques do seu oponente (após a aplicação de Fraqueza e Resistência). Você não pode usar mais de 1 Habilidade Cobertor de Folhas por vez.",
				'de-de': "Deinen Grass-Pokémon werden durch Attacken deines Gegners 40 Schadenspunkte weniger zugefügt (nachdem Schwäche und Resistenz verrechnet wurden). Du kannst immer nur jeweils 1 Fähigkeit Deckenflechter einsetzen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Colorless",
			],
			name: {
				'en-us': "Razor Leaf",
				'fr-fr': "Tranch’Herbe",
				'es-es': "Hoja Afilada",
				'it-it': "Foglielama",
				'pt-br': "Folha Navalha",
				'de-de': "Rasierblatt"
			},

			damage: 70,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	description: {
		'en-us': "Upon finding a small Pokémon, it weaves clothing for it from leaves by using the sticky silk secreted from its mouth.",
	},

	thirdParty: {
		cardmarket: 387877,
		tcgplayer: 194925
	}
}

export default card
