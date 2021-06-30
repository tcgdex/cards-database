import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Persian-GX",
		fr: "Persian-GX",
		es: "Persian-GX",
		it: "Persian-GX",
		pt: "Persian-GX",
		de: "Snobilikat-GX"
	},

	illustrator: "nagimiso",
	rarity: "Secret Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		53,
	],

	hp: 200,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Meowth",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Cat Walk",
				fr: "Marche Féline",
				es: "Paseo de Gatos",
				it: "Passo Felino",
				pt: "Caminhada de Gato",
				de: "Katzenpirsch"
			},
			effect: {
				en: "Once during your turn (before your attack), if 1 of your Pokémon-GX or Pokémon-EX was Knocked Out during your opponent’s last turn, you may search your deck for up to 2 cards and put them into your hand. Then, shuffle your deck. You can’t use more than 1 Cat Walk Ability each turn.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), si l’un de vos Pokémon-GX ou Pokémon-EX a été mis K.O. pendant le dernier tour de votre adversaire, vous pouvez chercher jusqu’à 2 cartes dans votre deck, puis les ajouter à votre main. Mélangez ensuite votre deck. Vous ne pouvez utiliser plus d’un talent Marche Féline par tour.",
				es: "Una vez durante tu turno (antes de tu ataque), si 1 de tus Pokémon-GX o Pokémon-EX quedó Fuera de Combate durante el último turno de tu rival, puedes buscar en tu baraja hasta 2 cartas y ponerlas en tu mano. Después, baraja las cartas de tu baraja. No puedes usar más de 1 habilidad Paseo de Gatos en cada turno.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, se uno dei tuoi Pokémon-GX o Pokémon-EX è stato messo KO durante l’ultimo turno del tuo avversario, puoi cercare nel tuo mazzo fino a due carte e aggiungerle alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Puoi usare l’abilità Passo Felino una sola volta per turno.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), se 1 dos seus Pokémon-GX ou Pokémon-EX tiver sido Nocauteado durante a última vez de jogar do seu oponente, você poderá procurar por até 2 cartas no seu baralho e colocá-las na sua mão. Em seguida, embaralhe o seu baralho. Você não pode usar mais de 1 Habilidade Caminhada de Gato por rodada.",
				de: "Einmal während deines Zuges (bevor du angreifst), wenn 1 deiner Pokémon-GX oder Pokémon-EX während des letzten Zuges deines Gegners kampfunfähig wurde, kannst du dein Deck nach bis zu 2 Karten durchsuchen und sie auf deine Hand nehmen. Mische anschließend dein Deck. Du kannst die Fähigkeit Katzenpirsch nur einmal pro Zug einsetzen."
			},
		},
	],

	attacks: [{
		cost: [
			"Colorless",
			"Colorless",
			"Colorless",
		],

		name: {
			en: "Vengeance",
			fr: "Rétorsion",
			es: "Revancha",
			it: "Rivalsa",
			pt: "Represália",
			de: "Rache"
		},

		damage: "10+",

		effect: {
			en: "This attack does 20 more damage for each Pokémon in your discard pile. You can’t add more than 180 damage in this way.",
			fr: "Cette attaque inflige 20 dégâts supplémentaires pour chaque Pokémon dans votre pile de défausse. Vous ne pouvez pas ajouter plus de 180 dégâts de cette façon.",
			es: "Este ataque hace 20 puntos de daño más por cada Pokémon en tu pila de descartes. No puedes añadir más de 180 puntos de daño de esta manera.",
			it: "Questo attacco infligge 20 danni in più per ogni Pokémon nella tua pila degli scarti. Non puoi aggiungere più di 180 danni in questo modo.",
			pt: "Este ataque causa 20 pontos de dano a mais para cada Pokémon na sua pilha de descarte. Você não pode adicionar mais de 180 pontos de dano desta forma.",
			de: "Diese Attacke fügt 20 Schadenspunkte mehr mal der Anzahl der Pokémon in deinem Ablagestapel zu. Du kannst auf diese Weise höchstens 180 Schadenspunkte mehr zufügen."
		}
	}, {
		name: {
			en: "Slash Back GX",
			fr: "Retour de Frappe GX",
			es: "Tajo Cambiante GX",
			it: "Sferzata Inversa GX",
			pt: "Contra-arranhar GX",
			de: "Rückschnitt GX"
		},

		damage: 150,

		effect: {
			en: "Switch this Pokémon with 1 of your Benched Pokémon. (You can’t use more than 1 GX attack in a game.)",
			fr: "Échangez ce Pokémon avec l’un de vos Pokémon de Banc. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
			es: "Cambia este Pokémon por 1 de tus Pokémon en Banca. (No puedes usar más de 1 ataque GX en una partida).",
			it: "Scambia questo Pokémon con uno della tua panchina. Non puoi usare più di un attacco GX a partita.",
			pt: "Troque este Pokémon por 1 dos seus Pokémon no Banco (você não pode usar mais de 1 ataque GX por partida).",
			de: "Tausche dieses Pokémon gegen 1 Pokémon auf deiner Bank aus. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
		},

		cost: ["Colorless", "Colorless", "Colorless"]
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 2
}

export default card
