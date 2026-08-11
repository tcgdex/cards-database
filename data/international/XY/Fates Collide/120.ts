import { Card } from 'models/database/card'
import Set from '../Fates Collide'

const card: Card = {
	name: {
		'en-us': "Genesect EX",
		'fr-fr': "Genesect EX",
		'es-es': "Genesect EX",
		'it-it': "Genesect EX",
		'pt-br': "Genesect EX",
		'de-de': "Genesect EX"
	},

	illustrator: "Ryo Ueda",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		649,
	],

	hp: 180,

	types: [
		"Metal",
	],

	suffix: "EX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Drive Change",
				'fr-fr': "Change Module",
				'es-es': "Cambio de ROM",
				'it-it': "Cambiamodulo",
				'pt-br': "Disco Trocado",
				'de-de': "Modulwechsel"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may put a Pokémon Tool card attached to this Pokémon into your hand.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez placer une carte Outil Pokémon attachée à ce Pokémon dans votre main.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes poner 1 carta de Herramienta Pokémon unida a este Pokémon en tu mano.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi aggiungere alle carte che hai in mano una carta Oggetto Pokémon assegnata a questo Pokémon.",
				'pt-br': "Uma vez durante sua vez de jogar (antes de atacar), você pode colocar um card de Ferramenta Pokémon ligado a este Pokémon em sua mão.",
				'de-de': "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Pokémon-Ausrüstung, die an dieses Pokémon angelegt ist, auf deine Hand nehmen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Metal",
			],
			name: {
				'en-us': "Rapid Blaster",
				'fr-fr': "Canon Rapide",
				'es-es': "Disparos Rápidos",
				'it-it': "Esplodirapido",
				'pt-br': "Detonador Rápido",
				'de-de': "Rapide Druckwelle"
			},
			effect: {
				'en-us': "Discard as many Metal Energy attached to this Pokémon as you like. This attack does 20 more damage for each Energy card discarded in this way.",
				'fr-fr': "Défaussez autant d'Énergies Metal attachées à ce Pokémon que vous voulez. Cette attaque inflige 20 dégâts supplémentaires pour chaque carte Énergie défaussée de cette façon.",
				'es-es': "Descarta tantas Energías Metal unidas a este Pokémon como quieras. Este ataque hace 20 puntos de daño más por cada carta de Energía descartada de esta manera.",
				'it-it': "Scarta a piacimento le Energie Metal assegnate a questo Pokémon. Questo attacco infligge 20 danni in più per ogni carta Energia scartata in questo modo.",
				'pt-br': "Descarte tantas Energias Metal ligadas a este Pokémon quanto desejar. Este ataque causa 20 de danos adicionais para cada card de Energia descartado desta forma.",
				'de-de': "Lege beliebig viele an dieses Pokémon angelegte Metal-Energien auf deinen Ablagestapel. Dieser Angriff fügt 20 weitere Schadenspunkte für jede Energiekarte zu, die auf diese Weise auf den Ablagestapel gelegt wurde."
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 2,
	stage: "Basic",

	thirdParty: {
		cardmarket: 289940,
		tcgplayer: 117892
	}
}

export default card
