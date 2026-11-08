import { Card } from 'models/database/card'
import Set from '../BREAKpoint'

const card: Card = {
	name: {
		'en-us': "Raticate",
		'fr-fr': "Rattatac",
		'es-es': "Raticate",
		'it-it': "Raticate",
		'pt-br': "Raticate",
		'de-de': "Rattikarl"
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
		'en-us': "Rattata",
		'fr-fr': "Rattata",
		'es-es': "Rattata",
		'it-it': "Rattata",
		'pt-br': "Rattata",
		'de-de': "Rattfratz"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				'en-us': "Antibodies",
				'fr-fr': "Anticorps",
				'es-es': "Anticuerpos",
				'it-it': "Anticorpi",
				'pt-br': "Anticorpos",
				'de-de': "Antikörper"
			},
			effect: {
				'en-us': "This Pokémon can't be affected by any Special Conditions. (Remove any Special Conditions affecting this Pokémon.)",
				'fr-fr': "Ce Pokémon ne peut être affecté par aucun État Spécial. (Retirez tous les États Spéciaux affectant ce Pokémon.)",
				'es-es': "Este Pokémon no se puede ver afectado por ninguna Condición Especial. (Elimina cualquier Condición Especial que afecte a este Pokémon).",
				'it-it': "Questo Pokémon non può essere influenzato da condizioni speciali (rimuovi tutte le condizioni speciali che influenzano questo Pokémon).",
				'pt-br': "Este Pokémon não pode ser afetado por nenhuma Condição Especial. (Remova todas as Condições Especiais que afetam este Pokémon.)",
				'de-de': "Dieses Pokémon kann nicht von Speziellen Zuständen betroffen werden. (Alle Speziellen Zustände auf diesem Pokémon verlieren ihre Wirkung.)"
			},
		},
	],

	attacks: [
		{
			cost: [
				"Colorless",
			],
			name: {
				'en-us': "Dirty Shock",
				'fr-fr': "Choc Crasseux",
				'es-es': "Impacto Sucio",
				'it-it': "Shock Settico",
				'pt-br': "Choque Sujo",
				'de-de': "Bakterieller Schock"
			},
			effect: {
				'en-us': "Your opponent's Active Pokémon is now Poisoned. Discard all Pokémon Tool cards attached to that Pokémon.",
				'fr-fr': "Le Pokémon Actif de votre adversaire est maintenant Empoisonné. Défaussez toutes les cartes Outil Pokémon attachées au Pokémon ciblé.",
				'es-es': "El Pokémon Activo de tu rival pasa a estar Envenenado. Descarta todas las cartas de Herramienta Pokémon unidas a ese Pokémon.",
				'it-it': "Il Pokémon attivo del tuo avversario viene avvelenato. Scarta tutte le carte Oggetto Pokémon assegnategli.",
				'pt-br': "O Pokémon Ativo do seu oponente agora está Envenenado. Descarte todos os cards de Ferramenta Pokémon ligados àquele Pokémon.",
				'de-de': "Das Aktive Pokémon deines Gegners ist jetzt vergiftet. Lege alle an jenes Pokémon angelegten Pokémon-Ausrüstungen auf den Ablagestapel deines Gegners."
			},

		},
	],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 0,

	description: {
		'en-us': "The webs on its hind legs enable it to cross rivers. It searches wide areas for food.",
	},

	thirdParty: {
		cardmarket: 288263,
		tcgplayer: 111623
	}
}

export default card
