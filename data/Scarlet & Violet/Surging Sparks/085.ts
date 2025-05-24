import { Card } from "../../../interfaces"
import Set from "../Surging Sparks"

const card: Card = {
	set: Set,

	name: {
		en: "Meowstic",
		fr: "Mistigrix",
		es: "Meowstic",
		it: "Meowstic",
		pt: "Meowstic",
		de: "Psiaugon"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 90,
	types: ["Psychic"],
	stage: "Stage1",

	abilities: [{
		type: "Ability",

		name: {
			en: "Beckoning Tail",
			fr: "Queue Invitante",
			es: "Cola Señuelo",
			it: "Coda Invitante",
			pt: "Cauda Fascinante",
			de: "Wedelnder Schweif"
		},

		effect: {
			en: "You must discard a Chill Teaser Toy card from your hand in order to use this Ability. Once during your turn, you may switch in 1 of your opponent's Benched Pokémon to the Active Spot.",
			fr: "Vous devez défausser une carte Jouet Plumeau de votre main pour pouvoir utiliser ce talent. Une fois pendant votre tour, vous pouvez envoyer l'un des Pokémon de Banc de votre adversaire sur le Poste Actif.",
			es: "Debes descartar 1 carta de Plumero Señuelo de tu mano para poder usar esta habilidad. Una vez durante tu turno, puedes cambiar 1 de los Pokémon en Banca de tu rival por el Pokémon que esté en el Puesto Activo.",
			it: "Devi scartare una carta Bacchetta Gioco Rilassante che hai in mano per usare questa abilità. Una sola volta durante il tuo turno, puoi sostituire uno dei Pokémon nella panchina del tuo avversario con il suo Pokémon in posizione attiva.",
			pt: "Você deve descartar uma carta Varinha Relaxante da sua mão para usar esta Habilidade. Uma vez durante o seu turno, você poderá mandar 1 dos Pokémon no Banco do seu oponente para o Campo Ativo.",
			de: "Du musst 1 Lockwedel-Karte aus deiner Hand auf deinen Ablagestapel legen, um diese Fähigkeit einzusetzen. Einmal während deines Zuges kannst du 1 Pokémon von der Bank deines Gegners in die Aktive Position einwechseln."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Colorless", "Colorless"],

		name: {
			en: "Psyshot",
			fr: "Piqûre Psy",
			es: "Disparo Psi",
			it: "Psicosparo",
			pt: "Tiro Psíquico",
			de: "Psychoschuss"
		},

		damage: 80
	}],

	retreat: 1,
	regulationMark: "H",

	variants: {
		holo: false
	},

	illustrator: "Yoriyuki Ikegami"
}

export default card
