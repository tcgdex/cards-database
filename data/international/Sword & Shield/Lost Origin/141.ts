import { Card } from "models/database/card"
import Set from "../Lost Origin"

const card: Card = {
	dexId: [233],
	set: Set,

	name: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon2",
		'es-es': "Porygon2",
		'it-it': "Porygon2",
		'pt-br': "Porygon2",
		'de-de': "Porygon2"
	},

	illustrator: "OKACHEKE",
	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Porygon",
		'fr-fr': "Porygon",
		'es-es': "Porygon",
		'it-it': "Porygon",
		'pt-br': "Porygon",
		'de-de': "Porygon"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless"],

		name: {
			'en-us': "Garbage Attack",
			'fr-fr': "Attaque Décharge",
			'es-es': "Ataque Basura",
			'it-it': "Attacco Spazzatura",
			'pt-br': "Golpe de Lixo",
			'de-de': "Abfallangriff"
		},

		effect: {
			'en-us': "This attack does 20 damage for each Pokémon Tool card in the Lost Zone (both yours and your opponent's).",
			'fr-fr': "Cette attaque inflige 20 dégâts pour chaque carte Outil Pokémon dans la Zone Perdue (la vôtre et celle de votre adversaire).",
			'es-es': "Este ataque hace 20 puntos de daño por cada carta de Herramienta Pokémon en la Zona Perdida (tanto tuyascomode tu rival).",
			'it-it': "Questo attacco infligge 20 danni per ogni carta Oggetto Pokémon nell'area perduta, sia tua che del tuo avversario.",
			'pt-br': "Este ataque causa 20 pontos de dano para cada carta de Ferramenta Pokémon na Zona Perdida (suas e do seu oponente).",
			'de-de': "Diese Attacke fügt für jede Pokémon-Ausrüstung im Nirgendwo (deinem und dem deines Gegners) 20 Schadenspunkte zu."
		},

		damage: "20×"
	}],

	retreat: 1,
	regulationMark: "F",


	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 674151,
				tcgplayer: 284064
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 674151,
				tcgplayer: 284064
			}
		},
	],
}

export default card
