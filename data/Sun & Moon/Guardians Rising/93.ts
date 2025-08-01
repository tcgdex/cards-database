import { Card } from '../../../interfaces'
import Set from '../Guardians Rising'

const card: Card = {
	name: {
		en: "Comfey",
		fr: "Guérilande",
		es: "Comfey",
		it: "Comfey",
		pt: "Comfey",
		de: "Curelei"
	},

	illustrator: "Sanosuke Sakuma",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		764,
	],

	hp: 70,

	types: [
		"Fairy",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Flower Shield",
				fr: "Garde Florale",
				es: "Defensa Floral",
				it: "Fiordifesa",
				pt: "Escudo Florido",
				de: "Floraschutz"
			},
			effect: {
				en: "Each of your Pokémon that has any Fairy Energy attached to it can’t be affected by any Special Conditions. Remove any Special Conditions affecting those Pokémon.",
				fr: "Aucun de vos Pokémon auquel de l’Énergie Fairy est attachée ne peut être affecté par des États Spéciaux. Retirez tous les États Spéciaux affectant ces Pokémon.",
				es: "Cada uno de tus Pokémon que tenga alguna Energía Fairy unida a él no se puede ver afectado por ninguna Condición Especial. Elimina cualquier Condición Especial que afecte a esos Pokémon.",
				it: "Nessuno dei tuoi Pokémon che ha delle Energie Fairy assegnate può essere influenzato da condizioni speciali. Rimuovi tutte le condizioni speciali che influenzano tali Pokémon.",
				pt: "Cada um dos seus Pokémon que tiver alguma Energia Fairy ligada a ele não poderá ser afetado por quaisquer Condições Especiais. Remova todas as Condições Especiais que afetem aqueles Pokémon.",
				de: "Jedes deiner Pokémon, an das mindestens 1 Fairy-Energie angelegt ist, kann nicht von Speziellen Zuständen betroffen werden. Alle Speziellen Zustände auf jenen Pokémon verlieren ihre Wirkung."
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
				en: "Sweet Kiss",
				fr: "Doux Baiser",
				es: "Beso Dulce",
				it: "Dolcebacio",
				pt: "Beijo Doce",
				de: "Bitterkuss"
			},
			effect: {
				en: "Your opponent draws a card.",
				fr: "Votre adversaire pioche une carte.",
				es: "Tu rival roba 1 carta.",
				it: "Il tuo avversario pesca una carta.",
				pt: "Seu oponente compra 1 carta.",
				de: "Dein Gegner zieht 1 Karte."
			},
			damage: 30,

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

	retreat: 1,

	thirdParty: {
		cardmarket: 297694
	}
}

export default card
