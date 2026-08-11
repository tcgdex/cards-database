import { Card } from 'models/database/card'
import Set from '../Team Up'

const card: Card = {
	name: {
		'en-us': "Hoopa GX",
		'fr-fr': "Hoopa GX",
		'es-es': "Hoopa GX",
		'it-it': "Hoopa GX",
		'pt-br': "Hoopa GX",
		'de-de': "Hoopa GX"
	},

	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		720,
	],

	hp: 190,

	types: [
		"Darkness",
	],

	suffix: "GX",

	attacks: [
		{
			cost: [
				"Darkness",
			],
			name: {
				'en-us': "Rogue Ring",
				'fr-fr': "Anneau de Truand",
				'es-es': "Anillo Pícaro",
				'it-it': "Anello Canaglia",
				'pt-br': "Anel Trapaceiro",
				'de-de': "Schurkenring"
			},
			effect: {
				'en-us': "Search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck.",
				'fr-fr': "Cherchez jusqu’à 2 cartes dans votre deck, puis ajoutez-les à votre main. Mélangez ensuite votre deck.",
				'es-es': "Busca en tu baraja hasta 2 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja.",
				'it-it': "Cerca nel tuo mazzo fino a due carte e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo.",
				'pt-br': "Procure por até 2 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho.",
				'de-de': "Durchsuche dein Deck nach bis zu 2 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck."
			},

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Dark Strike",
				'fr-fr': "Frappe Ténébreuse",
				'es-es': "Golpe Siniestro",
				'it-it': "Colpo Ombra",
				'pt-br': "Golpe de Escuridão",
				'de-de': "Finsterschlag"
			},
			effect: {
				'en-us': "This Pokémon can’t use Dark Strike during your next turn.",
				'fr-fr': "Ce Pokémon ne peut pas utiliser Frappe Ténébreuse pendant votre prochain tour.",
				'es-es': "Este Pokémon no puede usar Golpe Siniestro durante tu próximo turno.",
				'it-it': "Durante il tuo prossimo turno, questo Pokémon non può usare Colpo Ombra.",
				'pt-br': "Este Pokémon não poderá usar Golpe de Escuridão durante a sua próxima vez de jogar.",
				'de-de': "Dieses Pokémon kann Finsterschlag während deines nächsten Zuges nicht einsetzen."
			},
			damage: 160,

		},
		{
			cost: [
				"Darkness",
				"Darkness",
				"Darkness",
			],
			name: {
				'en-us': "Devilish Hands GX",
				'fr-fr': "Mains Diaboliques GX",
				'es-es': "Manos Diabólicas GX",
				'it-it': "Braccia Malefiche GX",
				'pt-br': "Mãos Malignas GX",
				'de-de': "Teufelshände GX"
			},
			effect: {
				'en-us': "Choose 1 of your opponent’s Pokémon-GX or Pokémon-EX 6 times. (You can choose the same Pokémon more than once.) For each time you chose a Pokémon, do 30 damage to it. This damage isn’t affected by Weakness or Resistance. (You can’t use more than 1 GX attack in a game.)",
				'fr-fr': "Choisissez 6 fois l’un des Pokémon-GX ou des Pokémon-EX de votre adversaire. (Vous pouvez choisir le même Pokémon plusieurs fois.) Chaque fois qu’un Pokémon est choisi, infligez 30 dégâts à celui-ci. Ces dégâts ne sont pas affectés par la Faiblesse ou la Résistance. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				'es-es': "Elige 1 de los Pokémon-GX o Pokémon-EX de tu rival 6 veces. (Puedes elegir el mismo Pokémon más de 1 vez). Por cada vez que elijas 1 Pokémon, hazle 30 puntos de daño a ese Pokémon. Este ataque no se ve afectado por Debilidad o Resistencia. (No puedes usar más de 1 ataque GX en una partida).",
				'it-it': "Scegli sei volte uno dei Pokémon-GX o dei Pokémon-EX del tuo avversario. Puoi scegliere lo stesso Pokémon più di una volta. Ogni volta che scegli un Pokémon, infliggigli 30 danni. Questi danni non sono influenzati dalla debolezza o dalla resistenza. Non puoi usare più di un attacco GX a partita.",
				'pt-br': "Escolha 1 dos Pokémon-GX ou Pokémon-EX do seu oponente 6 vezes (você pode escolher o mesmo Pokémon mais de uma vez). Para cada vez que você escolher um Pokémon, cause 30 pontos de dano a ele. Este dano não é afetado por Fraqueza ou Resistência (você não pode usar mais de 1 ataque GX por partida).",
				'de-de': "Wähle 6-mal 1 Pokémon-GX oder Pokémon-EX deines Gegners. (Du kannst dasselbe Pokémon mehr als einmal wählen.) Jedes Mal, wenn du ein Pokémon wählst, füge ihm 30 Schadenspunkte zu. Der Schaden dieser Attacke wird durch Schwäche und Resistenz nicht verändert. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Psychic",
			value: "-20"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 369091,
		tcgplayer: 183875
	}
}

export default card
