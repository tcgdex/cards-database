import { Card } from '../../../interfaces'
import Set from '../Lost Thunder'

const card: Card = {
	name: {
		en: "Lapras",
		fr: "Lokhlass",
		es: "Lapras",
		it: "Lapras",
		pt: "Lapras",
		de: "Lapras"
	},

	illustrator: "Sekio",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		131,
	],

	hp: 120,

	types: [
		"Water",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Go for a Swim",
				fr: "Piquer une Tête",
				es: "Ir a Nadar",
				it: "Nuotatina",
				pt: "Nadar",
				de: "Badegang"
			},
			effect: {
				en: "Once during your turn (before your attack), you may look at the top 2 cards of your deck and put them back in any order.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez regarder les 2 cartes du dessus de votre deck et les replacer dans l’ordre de votre choix.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes mirar las 2 primeras cartas de tu baraja y volver a ponerlas en la parte superior de tu baraja en el orden que quieras.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi guardare le prime due carte del tuo mazzo e rimetterle a posto nell’ordine che preferisci.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode olhar as 2 primeiras cartas do seu baralho e colocá-las de volta em qualquer ordem.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du dir die obersten 2 Karten deines Decks anschauen und sie in beliebiger Reihenfolge zurück auf dein Deck legen."
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
				en: "Ice Beam",
				fr: "Laser Glace",
				es: "Rayo Hielo",
				it: "Geloraggio",
				pt: "Raio Congelante",
				de: "Eisstrahl"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 50,

		},
	],

	weaknesses: [
		{
			type: "Metal",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 365695,
		tcgplayer: 178863
	}
}

export default card
