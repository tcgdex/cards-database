import { Card } from 'models/database/card'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		'en-us': "Blastoise & Piplup GX",
		'fr-fr': "Tortank et Tiplouf GX",
		'es-es': "Blastoise y Piplup GX",
		'it-it': "Blastoise e Piplup GX",
		'pt-br': "Blastoise e Piplup GX",
		'de-de': "Turtok & Plinfa GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		9,
		393
	],

	hp: 270,

	types: [
		"Water",
	],

	suffix: "TAG TEAM-GX",

	attacks: [
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Splash Maker",
				'fr-fr': "Faiseur de Vagues",
				'es-es': "Creasalpicadura",
				'it-it': "Idrogenesi",
				'pt-br': "Borrifadores",
				'de-de': "Planscherei"
			},
			effect: {
				'en-us': "You may attach up to 3 Water Energy cards from your hand to your Pokémon in any way you like. If you do, heal 50 damage from those Pokémon for each card you attached to them in this way.",
				'fr-fr': "Vous pouvez attacher jusqu’à 3 cartes Énergie Water de votre main à vos Pokémon, de la manière que vous voulez. Dans ce cas, soignez 50 dégâts à ces Pokémon pour chaque carte qui leur est attachée de cette façon.",
				'es-es': "Puedes unir hasta 3 cartas de Energía Water de tu mano a tus Pokémon de la manera que desees. Si lo haces, cura 50 puntos de daño a esos Pokémon por cada carta que hayas unido a ellos de esta manera.",
				'it-it': "Puoi assegnare a piacimento ai tuoi Pokémon fino a tre carte Energia Water dalla tua mano. Se lo fai, cura quei Pokémon da 50 danni per ogni carta che gli hai assegnato in questo modo.",
				'pt-br': "Você pode ligar até 3 cartas de Energia Water da sua mão aos seus Pokémon como desejar. Se fizer isto, cure 50 pontos de dano daqueles Pokémon para cada carta ligada a eles desta forma.",
				'de-de': "Du kannst bis zu 3 Water-Energiekarten aus deiner Hand beliebig an deine Pokémon anlegen. Wenn du das machst, heile bei jenen Pokémon 50 Schadenspunkte mal der Anzahl der auf diese Weise an sie angelegten Karten."
			},
			damage: 150,

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'en-us': "Bubble Launcher GX",
				'fr-fr': "Lance-Bulles GX",
				'es-es': "Lanzaburbujas GX",
				'it-it': "Bombardabolle GX",
				'pt-br': "Lançador de Bolhas GX",
				'de-de': "Blasenwerfer GX"
			},
			effect: {
				'en-us': "Your opponent’s Active Pokémon is now Paralyzed. If this Pokémon has at least 3 extra Water Energy attached to it (in addition to this attack’s cost), this attack does 150 more damage. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Paralysé. Si au moins 3 Énergies Water supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 150 dégâts supplémentaires. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Paralizado. Si este Pokémon tiene por lo menos 3 Energías Water adicionales unidas a él (además de las del coste de este ataque), este ataque hace 150 puntos de daño más. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Il Pokémon attivo del tuo avversario viene paralizzato. Se questo Pokémon ha almeno tre Energie Water extra assegnate, in aggiunta a quelle del costo di questo attacco, questo attacco infligge 150 danni in più. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Paralisado. Se este Pokémon tiver pelo menos 3 Energias Water adicionais ligadas a ele (além do custo deste ataque), este ataque causará 150 pontos de dano a mais (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt paralysiert. Wenn an dieses Pokémon mindestens 3 extra Water-Energien angelegt sind (zusätzlich zu den Kosten dieser Attacke), fügt diese Attacke 150 Schadenspunkte mehr zu. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},
			damage: "100+",

		},
		{
			cost: [
				"Water",
				"Water",
				"Colorless",
			],
			name: {
				'fr-fr': "Lance-Bulles-GX",
			},
			effect: {
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Paralysé. Si au moins 3 Énergies Water supplémentaires sont attachées à ce Pokémon (en plus du coût de cette attaque), cette attaque inflige 150 dégâts supplémentaires. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			},
			damage: "100+",

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 408664,
		tcgplayer: 201333
	}
}

export default card
