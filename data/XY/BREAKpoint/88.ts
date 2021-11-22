import { Card } from '../../../interfaces'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		en: "Raticate",
		fr: "Rattatac",
		es: "Raticate",
		it: "Raticate",
		pt: "Raticate",
		de: "Rattikarl"
	},

	illustrator: "Kagemaru Himeno",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		20,
	],

	hp: 70,

	types: [
		"Colorless",
	],

	evolveFrom: {
		en: "Rattata",
		fr: "Rattata",
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Antibodies",
				fr: "Anticorps",
				es: "Anticuerpos",
				it: "Anticorpi",
				pt: "Anticorpos",
				de: "Antikörper"
			},
			effect: {
				en: "This Pokémon can't be affected by any Special Conditions. (Remove any Special Conditions affecting this Pokémon.)",
				fr: "Ce Pokémon ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant ce Pokémon.)",
				es: "Este Pokémon no se puede ver afectado por ninguna Condición Especial. (Elimina cualquier Condición Especial que afecte a este Pokémon).",
				it: "Questo Pokémon non può essere influenzato da condizioni speciali (rimuovi tutte le condizioni speciali che influenzano questo Pokémon).",
				pt: "Este Pokémon não pode ser afetado por nenhuma Condição Especial. (Remova todas as Condições Especiais que afetam este Pokémon.)",
				de: "Dieses Pokémon kann nicht von Speziellen Zuständen betroffen werden. (Alle Speziellen Zustände auf diesem Pokémon verlieren ihre Wirkung.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				en: "Dirty Shock",
				fr: "Choc Crasseux",
				es: "Impacto Sucio",
				it: "Shock Settico",
				pt: "Choque Sujo",
				de: "Bakterieller Schock"
			},
			effect: {
				en: "Your opponent's Active Pokémon is now Poisoned. Discard all Pokémon Tool cards attached to that Pokémon.",
				fr: "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Défaussez toutes les cartes Outil Pokémon attachées au Pokémon ciblé.",
				es: "El Pokémon Activo de tu rival pasa a estar Envenenado. Descarta todas las cartas de Herramienta Pokémon unidas a ese Pokémon.",
				it: "Il Pokémon attivo del tuo avversario viene avvelenato. Scarta tutte le carte Oggetto Pokémon assegnategli.",
				pt: "O Pokémon Ativo do seu oponente agora está Envenenado. Descarte todos os cards de Ferramenta Pokémon ligados àquele Pokémon.",
				de: "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege alle an jenes Pokémon angelegten Pokémon-Ausrüstungen auf den Ablagestapel deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0
}

export default card
