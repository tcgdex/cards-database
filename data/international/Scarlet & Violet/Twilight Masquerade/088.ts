import { Card } from "models/database/card"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [671],
	set: Set,

	name: {
		'en-us': "Florges",
		'fr-fr': "Florges",
		'es-es': "Florges",
		'it-it': "Florges",
		'pt-br': "Florges",
		'de-de': "Florges"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	evolveFrom: {
		'en-us': "Floette",
		'fr-fr': "Floette",
		'es-es': "Floette",
		'it-it': "Floette",
		'pt-br': "Floette",
		'de-de': "Floette"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Captivating Invitation",
			'fr-fr': "Invitation Envoûtante",
			'es-es': "Invitación Cautivadora",
			'it-it': "Invito Intrigante",
			'pt-br': "Convite Cativante",
			'de-de': "Bezaubernde Einladung"
		},

		effect: {
			'en-us': "Once during your turn, you may flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot, and the new Active Pokémon is now Confused.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif, et le nouveau Pokémon Actif est maintenant Confus.",
			'es-es': "Una vez durante tu turno, puedes lanzar 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo, y el nuevo Pokémon Activo pasa a estar Confundido.",
			'it-it': "Una sola volta durante il tuo turno, puoi lanciare una moneta. Se esce testa, sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva, e il nuovo Pokémon attivo viene confuso.",
			'pt-br': "Uma vez durante o seu turno, você poderá jogar uma moeda. Se sair cara, mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo, e o novo Pokémon Ativo agora estará Confuso.",
			'de-de': "Einmal während deines Zuges kannst du 1 Münze werfen. Wechsle bei Kopf 1 Pokémon von der Bank deines Gegners in die Aktive Position ein, und das neue Aktive Pokémon ist jetzt verwirrt."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			'en-us': "Magical Shot",
			'fr-fr': "Coup Magique",
			'es-es': "Disparo Mágico",
			'it-it': "Magicolpo",
			'pt-br': "Tiro Mágico",
			'de-de': "Magischer Schuss"
		},

		damage: 120
	}],

	weaknesses: [
		{
			type: "Metal",
			value: "×2",
		},
	],
	retreat: 2,
	regulationMark: "H",

	description: {
		'en-us': "They say that flower gardens created by Florges are constantly showered with a power that can heal both body and spirit.",
	},

	variants: [
		{
			type: "normal",
			thirdParty: {
				cardmarket: 769262,
				tcgplayer: 550132
			}
		},
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 769262,
				tcgplayer: 550132
			}
		},
	],

	illustrator: "Ligton",

}

export default card