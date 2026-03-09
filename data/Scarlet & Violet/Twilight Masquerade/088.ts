import { Card } from "../../../interfaces"
import Set from "../Twilight Masquerade"

const card: Card = {
	dexId: [671],
	set: Set,

	name: {
		en: "Florges",
		fr: "Florges",
		es: "Florges",
		it: "Florges",
		pt: "Florges",
		de: "Florges"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Psychic"],
	evolveFrom: {
		en: "Floette",
		fr: "Floette",
		es: "Floette",
		it: "Floette",
		pt: "Floette",
		de: "Floette"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Captivating Invitation",
			fr: "Invitation Envoûtante",
			es: "Invitación Cautivadora",
			it: "Invito Intrigante",
			pt: "Convite Cativante",
			de: "Bezaubernde Einladung"
		},

		effect: {
			en: "Once during your turn, you may flip a coin. If heads, switch in 1 of your opponent's Benched Pokémon to the Active Spot, and the new Active Pokémon is now Confused.",
			fr: "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, envoyez l'un des Pokémon de Banc de votre adversaire sur le Poste Actif, et le nouveau Pokémon Actif est maintenant Confus.",
			es: "Una vez durante tu turno, puedes lanzar 1 moneda. Si sale cara, cambia 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo, y el nuevo Pokémon Activo pasa a estar Confundido.",
			it: "Una sola volta durante il tuo turno, puoi lanciare una moneta. Se esce testa, sostituisci uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva, e il nuovo Pokémon attivo viene confuso.",
			pt: "Uma vez durante o seu turno, você poderá jogar uma moeda. Se sair cara, mande 1 dos Pokémon no Banco do seu oponente para o Campo Ativo, e o novo Pokémon Ativo agora estará Confuso.",
			de: "Einmal während deines Zuges kannst du 1 Münze werfen. Wechsle bei Kopf 1 Pokémon von der Bank deines Gegners in die Aktive Position ein, und das neue Aktive Pokémon ist jetzt verwirrt."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless"],

		name: {
			en: "Magical Shot",
			fr: "Coup Magique",
			es: "Disparo Mágico",
			it: "Magicolpo",
			pt: "Tiro Mágico",
			de: "Magischer Schuss"
		},

		damage: 120
	}],

	retreat: 2,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Ligton",

	thirdParty: {
		cardmarket: 769262
	}
}

export default card