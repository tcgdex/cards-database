import { Card } from '../../../interfaces'
import Set from '../Evolutions'

const card: Card = {
	name: {
		en: "Starmie",
		fr: "Staross",
		es: "Starmie",
		it: "Starmie",
		pt: "Starmie",
		de: "Starmie"
	},

	illustrator: "Keiji Kinebuchi",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		121,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Staryu",
		fr: "Stari",
		es: "Staryu",
		it: "Staryu",
		pt: "Staryu",
		de: "Sterndu"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Space Beacon",
				fr: "Lumière Spatiale",
				es: "Señal Espacial",
				it: "Segnale dallo Spazio",
				pt: "Farol Espacial",
				de: "Signal im All"
			},
			effect: {
				en: "Once during your turn (before your attack), you may discard a card from your hand. If you do, put 2 basic Energy cards from your discard pile into your hand. (You can't choose a card you discarded with the effect of this Ability.)",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez défausser une carte de votre main. Dans ce cas, prenez 2 cartes Énergie de base dans votre pile de défausse et ajoutez-les à votre main. (Vous ne pouvez pas choisir une carte que vous avez défaussée du fait de l'effet de ce talent.)",
				es: "Una vez durante tu turno (antes de tu ataque), puedes descartar 1 carta de tu mano. Si lo haces, pon 2 cartas de Energía Básica de tu pila de descartes en tu mano. (No puedes elegir una carta que hayas descartado con el efecto de esta habilidad).",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi scartare una delle carte che hai in mano. Se lo fai, prendi due carte Energia base dalla tua pila degli scarti e aggiungile alle carte che hai in mano. Ricorda che non puoi scegliere una carta scartata con l'effetto di questa abilità.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você pode descartar um card da sua mão. Se fizer isso, coloque 2 cards de Energia básica da sua pilha de descarte em sua mão. (Não é possível escolher um card que foi descartado com o efeito desta Habilidade.)",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Karte von deiner Hand auf deinen Ablagestapel legen. Wenn du das machst, nimm 2 Basis-Energiekarten von deinem Ablagestapel auf deine Hand. (Du kannst keine Karte auswählen, die du mit dem Effekt dieser Fähigkeit auf deinen Ablagestapel gelegt hast.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Star Freeze",
				fr: "Étoile Gelante",
				es: "Congelamiento Estelar",
				it: "Assideramento Stellare",
				pt: "Estrela Congelada",
				de: "Sternenfrost"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

		}
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 293388,
		tcgplayer: 124044
	}
}

export default card
