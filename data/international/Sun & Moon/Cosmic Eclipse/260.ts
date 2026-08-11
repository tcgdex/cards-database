import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Naganadel & Guzzlord GX",
		'fr-fr': "Mandrillon et Engloutyran GX",
		'es-es': "Naganadel y Guzzlord GX",
		'it-it': "Naganadel e Guzzlord GX",
		'pt-br': "Naganadel e Guzzlord GX",
		'de-de': "Agoyon & Schlingking GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		799,
		804
	],

	hp: 280,

	types: [
		"Dragon",
	],

	stage: "Basic",
	suffix: "TAG TEAM-GX",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Violent Appetite",
				'fr-fr': "Appétit Insatiable",
				'es-es': "Apetito Violento",
				'it-it': "Appetito Violento",
				'pt-br': "Apetite Violento",
				'de-de': "Ungestümer Appetit"
			},
			effect: {
				'en-us': "Once during your turn (before your attack), you may discard a Pokémon from your hand. If you do, heal 60 damage from this Pokémon.",
				'fr-fr': "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser un Pokémon de votre main. Dans ce cas, soignez 60 dégâts à ce Pokémon.",
				'es-es': "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 Pokémon de tu mano. Si lo haces, cura 60 puntos de daño a este Pokémon.",
				'it-it': "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare un Pokémon che hai in mano. Se lo fai, cura questo Pokémon da 60 danni.",
				'pt-br': "Uma vez durante a sua vez de jogar (antes de atacar), você pode descartar 1 Pokémon da sua mão. Se fizer isto, cure 60 pontos de dano deste Pokémon.",
				'de-de': "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Pokémon aus deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, heile 60 Schadenspunkte bei diesem Pokémon."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
			],
			name: {
				'en-us': "Jet Pierce",
				'fr-fr': "Jet Perçant",
				'es-es': "Perforación Turbo",
				'it-it': "Perforazione Jet",
				'pt-br': "Jato Perfurante",
				'de-de': "Schneller Stich"
			},

			damage: 180,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Chaotic Order GX",
				'fr-fr': "Ordre Chaotique GX",
				'es-es': "Orden Caótico GX",
				'it-it': "Ordine Caotico GX",
				'pt-br': "Ordem Caótica GX",
				'de-de': "Chaosordnung GX"
			},
			effect: {
				'en-us': "Turn all of your Prize cards face up. (Those Prize cards remain face up for the rest of the game.) If this Pokémon has at least 1 extra Psychic Energy and 1 extra Darkness Energy attached to it (in addition to this attack’s cost), take 2 Prize cards. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Tournez toutes vos cartes Récompense face découverte. (Ces cartes Récompense restent face découverte pour le reste de la partie.) Si au moins une Énergie Psychic supplémentaire et une Énergie Darkness supplémentaire sont attachées à ce Pokémon (en plus du coût de cette attaque), récupérez 2 cartes Récompense. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Pon todas tus cartas de Premio boca arriba. (Esas cartas de Premio permanecerán boca arriba durante el resto de la partida). Si este Pokémon tiene por lo menos 1 Energía Psychic adicional y 1 Energía Darkness adicional unidas a él (además de las del coste de este ataque), coge 2 cartas de Premio. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Gira tutte le tue carte Premio a faccia in su (rimarranno così per il resto della partita). Se questo Pokémon ha almeno un’Energia Psychic e un’Energia Darkness extra assegnate, in aggiunta a quelle del costo di questo attacco, prendi due carte Premio. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Vire para cima todas as suas cartas de Prêmio (elas permanecerão viradas para cima pelo resto da partida). Se este Pokémon tiver pelo menos 1 Energia Psychic adicional e 1 Energia Darkness adicional ligadas a ele (além do custo deste ataque), pegue 2 cartas de Prêmio (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Decke alle deine Preiskarten auf. (Jene Preiskarten bleiben für den Rest des Spiels aufgedeckt.) Wenn an dieses Pokémon mindestens 1 extra Psychic-Energie und 1 extra Darkness-Energie angelegt sind (zusätzlich zu den Kosten dieser Attacke), nimm 2 Preiskarten. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 410629,
		tcgplayer: 201622
	}
}

export default card
