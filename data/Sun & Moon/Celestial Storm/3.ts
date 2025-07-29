import { Card } from '../../../interfaces'
import Set from '../Celestial Storm'

const card: Card = {
	name: {
		en: "Victreebel",
		fr: "Empiflor",
		es: "Victreebel",
		it: "Victreebel",
		pt: "Victreebel",
		de: "Sarzenia"
	},

	illustrator: "Miki Tanaka",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		71,
	],

	hp: 140,

	types: [
		"Grass",
	],

	evolveFrom: {
		en: "Weepinbell",
		fr: "Boustiflor",
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Fragrance Trap",
				fr: "Piège Parfumé",
				es: "Trampa Fragancia",
				it: "Trappola Aromatica",
				pt: "Armadilha Cheirosa",
				de: "Aromafalle"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, switch 1 of your opponent’s Benched Pokémon with their Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, échangez l’un des Pokémon de Banc de votre adversaire avec son Pokémon Actif.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes lanzar 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por su Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, scambia uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon attivo.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode jogar 1 moeda. Se sair cara, troque 1 dos Pokémon no Banco do seu oponente pelo Pokémon Ativo dele(a).",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Münze werfen. Tausche bei Kopf 1 Pokémon auf der Bank deines Gegners gegen sein Aktives Pokémon aus."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Corrosive Acid",
				fr: "Acide Corrosif",
				es: "Ácido Corrosivo",
				it: "Acido Corrosivo",
				pt: "Ácido Corrosivo",
				de: "Zersetzendes Gift"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Burned.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Brûlé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Quemado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene bruciato.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Queimado.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verbrannt."
			},
			damage: 80,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 2,

	thirdParty: {
		cardmarket: 361250
	}
}

export default card
