import { Card } from '../../../interfaces'
import Set from '../Phantom Forces'

const card: Card = {
	name: {
		en: "Hydreigon",
		fr: "Trioxhydre",
		es: "Hydreigon",
		it: "Hydreigon",
		pt: "Hydreigon",
		de: "Trikephalo"
	},

	illustrator: "5ban Graphics",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		635,
	],

	hp: 140,

	types: [
		"Dragon",
	],

	evolveFrom: {
		en: "Zweilous",
		fr: "Diamat",
		es: "Zweilous",
		it: "Zweilous",
		pt: "Zweilous",
		de: "Duodino"
	},

	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Dark Impulse",
				fr: "Impulsion Obscure",
				es: "Impulso Oscuro",
				it: "Scurimpulso",
				pt: "Impulso Sombrio",
				de: "Dunkler Impuls"
			},
			effect: {
				en: "Once during your turn (before your attack), you may attach a Darkness Energy card from your discard pile to your Active Pokémon.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez attacher une carte Énergie Darkness de votre pile de défausse à votre Pokémon Actif.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes unir 1 carta de Energía Darkness de tu pila de descartes a tu Pokémon Activo.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi assegnare al tuo Pokémon attivo una carta Energia Darkness dalla tua pila degli scarti.",
				pt: "Uma vez durante sua vez de jogar (antes de atacar), você poderá ligar um card de Energia Darkness da sua pilha de descarte ao seu Pokémon Ativo.",
				de: "Einmal während deines Zuges (vor deinem Angriff) kannst du 1 Darkness-Energiekarte von deinem Ablagestapel an dein Aktives Pokémon anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Psychic",
				"Darkness",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Crazy Headbutt",
				fr: "Coup d'Boule Fou",
				es: "Cabezazo Alocado",
				it: "Bottintesta Folle",
				pt: "Cabeçada Louca",
				de: "Irre Kopfnuss"
			},
			effect: {
				en: "Discard an Energy attached to this Pokémon.",
				fr: "Défaussez une Énergie attachée à ce Pokémon.",
				es: "Descarta 1 Energía unida a este Pokémon.",
				it: "Scarta un'Energia assegnata a questo Pokémon.",
				pt: "Descarte uma Energia ligada a este Pokémon.",
				de: "Lege 1 an dieses Pokémon angelegte Energie auf deinen Ablagestapel."
			},
			damage: 130,

		},
	],

	weaknesses: [
		{
			type: "Fairy",
			value: "×2"
		},
	],

	retreat: 3,

	thirdParty: {
		cardmarket: 281880
	}
}

export default card
