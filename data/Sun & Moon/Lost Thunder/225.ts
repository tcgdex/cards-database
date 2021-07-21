import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Alolan Ninetales-GX",
		fr: "Feunard d’Alola-GX",
		es: "Ninetales de Alola-GX",
		it: "Ninetales di Alola-GX",
		pt: "Ninetales de Alola-GX",
		de: "Alola Vulnona-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Secret Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		38,
	],
	hp: 200,
	types: [
		"Fairy",
	],
	evolveFrom: {
		en: "Alolan Vulpix",
		fr: "Goupix d’Alola",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Mysterious Guidance",
				fr: "Guide Mystérieux",
				es: "Guía Misteriosa",
				it: "Guida Segreta",
				pt: "Orientação Misteriosa",
				de: "Geheimnisvolle Hilfe"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may search your deck for up to 2 Item cards, reveal them, and put them into your hand. Then, shuffle your deck.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez chercher jusqu’à 2 cartes Objet dans votre deck, les montrer et les ajouter à votre main. Mélangez ensuite votre deck.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes buscar en tu baraja hasta 2 cartas de Objeto, enseñarlas y ponerlas en tu mano. Después, baraja las cartas de tu baraja.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi cercare nel tuo mazzo fino a due carte Strumento, mostrarle e aggiungerle a quelle che hai in mano. Poi rimischia le carte del tuo mazzo.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você pode procurar por até 2 cartas de Item no seu baralho, revelá-las e colocá-las na sua mão. Em seguida, embaralhe o seu baralho.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du dein Deck nach bis zu 2 Itemkarten durchsuchen, sie deinem Gegner zeigen und sie auf deine Hand nehmen. Mische anschließend dein Deck."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Snowy Wind",
				fr: "Vent Neigeux",
				es: "Viento Níveo",
				it: "Vento Nevoso",
				pt: "Ventania Nevada",
				de: "Schnee und Wind"
			},
			effect: {
				en: "This attack does 30 damage to 1 of your opponent’s Benched Pokémon. (Don’t apply Weakness and Resistance for Benched Pokémon.)",
				fr: "Cette attaque inflige 30 dégâts à l’un des Pokémon de Banc de votre adversaire. (N’appliquez ni la Faiblesse ni la Résistance aux Pokémon de Banc.)",
				es: "Este ataque hace 30 puntos de daño a 1 de los Pokémon en Banca de tu rival. (No apliques Debilidad y Resistencia a los Pokémon en Banca).",
				it: "Questo attacco infligge 30 danni a uno dei Pokémon nella panchina del tuo avversario. Ricorda che non puoi applicare debolezza e resistenza ai Pokémon in panchina.",
				pt: "Este ataque causa 30 pontos de dano a 1 dos Pokémon no Banco do seu oponente (não aplique Fraqueza e Resistência aos Pokémon no Banco).",
				de: "Diese Attacke fügt 1 Pokémon auf der Bank deines Gegners 30 Schadenspunkte zu. (Wende Schwäche und Resistenz bei Pokémon auf der Bank nicht an.)"
			},
			damage: 70,

		},
		{
			cost: [
				"Fairy",
				"Colorless",
			],
			name: {
				en: "Sublimation GX",
				fr: "Sublimation GX",
				es: "Sublimación GX",
				it: "Sublimazione-GX",
				pt: "Sublimação GX",
				de: "Sublimation GX"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is an Ultra Beast, it is Knocked Out. (You can’t use more than 1 GX attack in a game.)",
				fr: "Si le Pokémon Actif de votre adversaire est une Ultra-Chimère, il est mis K.O. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Si el Pokémon Activo de tu rival es un Ultraente, queda Fuera de Combate. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Se il Pokémon attivo del tuo avversario è un’Ultracreatura, viene messo KO. Non puoi usare più di un attacco GX a partita.",
				pt: "Se o Pokémon Ativo do seu oponente for uma Ultracriatura, aquele Pokémon será Nocauteado (você não pode usar mais de 1 ataque GX por partida).",
				de: "Wenn das Aktive Pokémon deines Gegners eine Ultrabestie ist, ist es kampfunfähig. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

		},
	],
	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],
	resistances: [
		{
			type: "Darkness",
			value: "-20"
		},
	],
	retreat: 2,



}

export default card
