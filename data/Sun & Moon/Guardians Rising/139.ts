import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Metagross-GX",
		fr: "Métalosse-GX",
		es: "Metagross-GX",
		it: "Metagross-GX",
		pt: "Metagross-GX",
		de: "Metagross-GX"
	},
	illustrator: "5ban Graphics",
	rarity: "Ultra Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		376,
	],
	hp: 250,
	types: [
		"Metal",
	],
	evolveFrom: {
		en: "Metang",
		fr: "Métang",
	},

	suffix: "GX",
	abilities: [
		{
			type: "Ability",
			name: {
				en: "Geotech System",
				fr: "Système Géotechnique",
				es: "Sistema Geotécnico",
				it: "Sistema Geotecnico",
				pt: "Sistema Geotecnológico",
				de: "Erdbau"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Psychic or Metal Energy card from your discard pile to your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Psychic ou Metal de votre pile de défausse à votre Pokémon Actif.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Psychic o Metal de tu pila de descartes a tu Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare al tuo Pokémon attivo una carta Energia Psychic o Metal dalla tua pila degli scarti.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode ligar 1 carta de Energia Psychic ou Metal da sua pilha de descarte ao seu Pokémon Ativo.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Psychic- oder 1 Metal-Energiekarte aus deinem Ablagestapel an dein Aktives Pokémon anlegen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Metal",
				"Metal",
				"Colorless",
			],
			name: {
				en: "Giga Hammer",
				fr: "Giga Marteau",
				es: "Gigamartillo",
				it: "Gigamartello",
				pt: "Gigamartelo",
				de: "Gigahammer"
			},
			effect: {
				en: "This Pokémon can’t use Giga Hammer during your next turn.",
				fr: "Ce Pokémon ne peut pas utiliser Giga Marteau pendant votre prochain tour.",
				es: "Este Pokémon no puede usar Gigamartillo durante tu próximo turno.",
				it: "Durante il tuo prossimo turno, questo Pokémon non può usare Gigamartello.",
				pt: "Este Pokémon não poderá usar Gigamartelo durante a sua próxima vez de jogar.",
				de: "Dieses Pokémon kann Gigahammer während deines nächsten Zuges nicht einsetzen."
			},
			damage: 150,

		},
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Algorithm GX",
				fr: "Algorithme GX",
				es: "Algoritmo GX",
				it: "Algoritmo-GX",
				pt: "Algoritmo GX",
				de: "Algorithmus GX"
			},
			effect: {
				en: "Search your deck for up to 5 cards and put them into your hand. Then, shuffle your deck. (You can’t use more than 1 GX attack in a game.)",
				fr: "Cherchez jusqu’à 5 cartes dans votre deck et ajoutez-les à votre main. Mélangez ensuite votre deck. (Vous ne pouvez utiliser qu’une attaque GX par partie.)",
				es: "Busca en tu baraja hasta 5 cartas y ponlas en tu mano. Después, baraja las cartas de tu baraja. (No puedes usar más de 1 ataque GX en una partida).",
				it: "Cerca nel tuo mazzo fino a cinque carte e aggiungile alle carte che hai in mano. Poi rimischia le carte del tuo mazzo. Non puoi usare più di un attacco GX a partita.",
				pt: "Procure por até 5 cartas no seu baralho e coloque-as na sua mão. Em seguida, embaralhe o seu baralho (você não pode usar mais de 1 ataque GX por partida).",
				de: "Durchsuche dein Deck nach bis zu 5 Karten und nimm sie auf deine Hand. Mische anschließend dein Deck. (Du kannst pro Spiel nur 1 GX-Attacke einsetzen.)"
			},

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
	retreat: 3,



}

export default card
