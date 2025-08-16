import { Card } from '../../../interfaces'
import Set from '../Burning Shadows'

const card: Card = {
	name: {
		en: "Butterfree",
		fr: "Papilusion",
		es: "Butterfree",
		it: "Butterfree",
		pt: "Butterfree",
		de: "Smettbo"
	},

	illustrator: "Shin Nagasawa",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		12,
	],

	hp: 120,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Metapod",
		fr: "Chrysacier",
	},

	stage: "Stage2",

	attacks: [
		{
			cost: [
				"Grass",
			],
			name: {
				en: "Bye-Bye Heal",
				fr: "Soins et Adieux",
				es: "Adiós, Cura",
				it: "Addio Cura",
				pt: "Adeus Cura",
				de: "Bye-bye-Heilen"
			},
			effect: {
				en: "Heal all damage from all of your Pokémon. Shuffle this Pokémon and all cards attached to it into your deck.",
				fr: "Soignez tous les dégâts de vos Pokémon. Mélangez ce Pokémon et toutes les cartes qui lui sont attachées avec votre deck.",
				es: "Cura todos los puntos de daño a todos tus Pokémon. Pon este Pokémon y todas las cartas unidas a él en tu baraja y barájalas todas.",
				it: "Cura tutti i tuoi Pokémon da tutti i danni. Rimischia questo Pokémon e tutte le carte a esso assegnate nel tuo mazzo.",
				pt: "Cure todo o dano de todos os seus Pokémon. Embaralhe este Pokémon e todas as cartas ligadas a ele no seu baralho.",
				de: "Heile allen Schaden bei jedem deiner Pokémon. Mische dieses Pokémon und alle an es angelegten Karten in dein Deck."
			},

		},
		{
			cost: [
				"Grass",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Stun Spore",
				fr: "Para-Spore",
				es: "Paralizador",
				it: "Paralizzante",
				pt: "Esporos Atordoantes",
				de: "Stachelspore"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 60,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 299410,
		tcgplayer: 138273
	}
}

export default card
