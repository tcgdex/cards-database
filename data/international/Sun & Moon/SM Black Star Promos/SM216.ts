import { Card } from 'models/database/card'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		'en-us': "Porygon-Z GX",
		'fr-fr': "Porygon-Z GX",
		'es-es': "Porygon-Z GX",
		'it-it': "Porygon-Z GX",
		'pt-br': "Porygon-Z GX",
		'de-de': "Porygon-Z GX"
	},

	illustrator: "PLANETA Tsuji",
	rarity: "Promo",
	category: "Pokemon",
	set: Set,

	dexId: [
		474,
	],

	hp: 240,

	types: [
		"Colorless",
	],

	evolveFrom: {
		'en-us': "Porygon2",
		'fr-fr': "Porygon"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Troubleshooting",
				'fr-fr': "Résolution de Problèmes",
				'es-es': "Resolución de Problemas",
				'it-it': "Risoluzione dei Problemi",
				'pt-br': "Detecção de Defeitos",
				'de-de': "Fehlerbehebung"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard a Special Energy from this Pokémon. If you do, heal 80 damage from it.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une Énergie spéciale de ce Pokémon. Dans ce cas, soignez 80 dégâts à ce Pokémon.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 Energía Especial de este Pokémon. Si lo haces, cúrale 80 puntos de daño.",
				'it-it': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une Énergie spéciale de ce Pokémon. Dans ce cas, soignez 80 dégâts à ce Pokémon.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar 1 Energia Especial deste Pokémon. Se fizer isto, cure 80 pontos de dano dele.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Spezial-Energie von diesem Pokémon auf deinen Ablagestapel legen. Wenn du das machst, heile 80 Schadenspunkte bei ihm."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
				"Colorless",
			],
			name: {
				'en-us': "Abnormal Overheating",
				'fr-fr': "Surchauffe Anormale",
				'es-es': "Sobrecalentamiento Anómalo",
				'it-it': "Surriscaldamento Anomalo",
				'pt-br': "Superaquecimento Anormal",
				'de-de': "Ungewöhnliche Überhitzung"
			},
			effect: {
				'en-us': "This Pokémon is now Burned.",
				'fr-fr': "Ce Pokémon est maintenant Brûlé.",
				'es-es': "Este Pokémon pasa a estar Quemado.",
				'it-it': "Ce Pokémon est maintenant Brûlé.",
				'pt-br': "Este Pokémon agora está Queimado.",
				'de-de': "Dieses Pokémon ist jetzt verbrannt."
			},
			damage: 160,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Critical Error GX",
				'fr-fr': "Erreur Critique GX",
				'es-es': "Error Crítico GX",
				'it-it': "Errore Critico GX",
				'pt-br': "Erro Crítico GX",
				'de-de': "Kritischer Fehler GX"
			},
			effect: {
				'en-us': "Search your deck for up to 10 cards and discard them. Then, shuffle your deck. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Cherchez jusqu’à 10 cartes dans votre deck et défaussez-les. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Busca en tu baraja hasta 10 cartas y descártalas. Después, baraja las cartas de tu baraja. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Cherchez jusqu’à 10 cartes dans votre deck et défaussez-les. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'pt-br': "Procure por até 10 cartas no seu baralho e descarte-as. Em seguida, embaralhe o seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Durchsuche dein Deck nach bis zu 10 Karten und lege sie auf deinen Ablagestapel. Mische anschließend dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2,
}

export default card
