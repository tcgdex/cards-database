import { Card } from '../../../interfaces'
import Set from '../Crimson Invasion'

const card: Card = {
	name: {
		en: "Cinccino",
		fr: "Pashmilla",
		es: "Cinccino",
		it: "Cinccino",
		pt: "Cinccino",
		de: "Chillabell"
	},

	illustrator: "0313",
	rarity: "Uncommon",
	category: "Pokemon",
	set: Set,

	dexId: [
		573,
	],

	hp: 90,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Minccino",
		fr: "Chinchidou",
	},

	stage: "Stage1",

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Amazing Plea",
				fr: "Requête Incroyable",
				es: "Súplica Asombrosa",
				it: "Richiesta Straordinaria",
				pt: "Súplica Fantástica",
				de: "Verblüffende Bitte"
			},
			effect: {
				en: "Choose 2 cards from your discard pile. Then, ask your opponent if you may put them into your hand. If yes, put those cards into your hand. If no, this attack does 80 damage to your opponent’s Active Pokémon.",
				fr: "Choisissez 2 cartes dans votre pile de défausse. Ensuite, demandez à votre adversaire si vous pouvez les mettre dans votre main. Si oui, placez ces cartes dans votre main. Si non, cette attaque inflige 80 dégâts au Pokémon Actif de votre adversaire.",
				es: "Elige 2 cartas de tu pila de descartes. Después, pregúntale a tu rival si puedes ponerlas en tu mano. Si contesta que sí, pon esas cartas en tu mano. Si contesta que no, este ataque hace 80 puntos de daño al Pokémon Activo de tu rival.",
				it: "Scegli due carte dalla tua pila degli scarti. Poi chiedi al tuo avversario se puoi aggiungerle a quelle che hai in mano. Se dice di sì, aggiungile a quelle che hai in mano. Se dice di no, questo attacco infligge 80 danni al Pokémon attivo del tuo avversario.",
				pt: "Escolha 2 cartas da sua pilha de descarte. Em seguida, pergunte ao seu oponente se pode colocá-las na sua mão. Se sim, coloque aquelas cartas na sua mão. Se não, este ataque causará 80 pontos de dano ao Pokémon Ativo do seu oponente.",
				de: "Wähle 2 Karten aus deinem Ablagestapel. Frage anschließend deinen Gegner, ob du sie auf deine Hand nehmen kannst. Wenn ja, nimm jene Karten auf deine Hand. Wenn nein, fügt diese Attacke dem Aktiven Pokémon deines Gegners 80 Schadenspunkte zu."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 311933,
		tcgplayer: 149111
	}
}

export default card
