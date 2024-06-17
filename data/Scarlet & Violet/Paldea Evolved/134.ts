import { Card } from "../../../interfaces"
import Set from "../Paldea Evolved"

const card: Card = {
	dexId: [461],
	set: Set,

	name: {
		fr: "Dimoret",
		en: "Weavile",
		es: "Weavile",
		it: "Weavile",
		pt: "Weavile",
		de: "Snibunna"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			fr: "Chasse Assaillante",
			en: "Assaulting Hunt",
			es: "Cacería de Asalto",
			it: "Agguato Aggressivo",
			pt: "Caçada Ofensiva",
			de: "Verfolgungsjagd"
		},

		effect: {
			fr: "Une fois pendant votre tour, lorsque ce Pokémon se déplace de votre Banc vers le Poste Actif, vous pouvez envoyer l'un des Pokémon de Banc de base de votre adversaire sur le Poste Actif.",
			en: "Once during your turn, when this Pokémon moves from your Bench to the Active Spot, you may switch in 1 of your opponent's Benched Basic Pokémon to the Active Spot.",
			es: "Una vez durante tu turno, cuando este Pokémon se mueve de tu Banca al Puesto Activo, puedes cambiar 1 de los Pokémon Básicos en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			it: "Una sola volta durante il tuo turno, quando questo Pokémon si sposta dalla tua panchina in posizione attiva, puoi sostituire uno dei Pokémon Base nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			pt: "Uma vez durante o seu turno, quando este Pokémon for movido do seu Banco para o Campo Ativo, você poderá mandar 1 dos Pokémon Básicos no Banco do seu oponente para o Campo Ativo.",
			de: "Einmal während deines Zuges, wenn dieses Pokémon von deiner Bank in die Aktive Position wechselt, kannst du 1 Basis-Pokémon von der Bank deines Gegners in die Aktive Position einwechseln."
		}
	}],

	attacks: [{
		cost: ["Darkness", "Colorless"],

		name: {
			fr: "Griffe Taillante",
			en: "Slashing Claw",
			es: "Garra Cuchillazo",
			it: "Artigli Laceranti",
			pt: "Garra Cortadora",
			de: "Schlitzende Klaue"
		},

		damage: 70
	}],

	retreat: 1,
	regulationMark: "G"
}

export default card