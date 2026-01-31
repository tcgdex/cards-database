import { Card } from "../../../interfaces"
import Set from "../Ascended Heroes"

const card: Card = {
	set: Set,

	name: {
		en: "Spectrier",
		fr: "Spectreval",
		es: "Spectrier",
		'es-mx': "Spectrier",
		de: "Phantoross",
		it: "Spectrier",
		pt: "Spectrier"
	},

	illustrator: "Taiga Kasai",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Spooky Shot",
			fr: "Tir Effrayant",
			es: "Disparo Embrujado",
			'es-mx': "Disparo Espeluznante",
			de: "Spukschuss",
			it: "Colpomistero",
			pt: "Tiro Assustador"
		},

		damage: 30
	}, {
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Phantasmal Barrage",
			fr: "Offensive Spectrale",
			es: "Bombardeo Fantasmal",
			'es-mx': "Bombardeo Fantasmal",
			de: "Phantomfragmente",
			it: "Schegge Spettrali",
			pt: "Barricada Espectral"
		},

		effect: {
			en: "Discard all Energy from this Pokémon and place 12 damage counters on 1 of your opponent's Pokémon.",
			fr: "Défaussez toutes les Énergies de ce Pokémon. Placez 12 marqueurs de dégâts sur l'un des Pokémon de votre adversaire.",
			es: "Descarta todas las Energías de este Pokémon y pon 12 contadores de daño en uno de los Pokémon de tu rival.",
			'es-mx': "Descarta todas las Energías de este Pokémon y pon 12 contadores de daño en 1 de los Pokémon de tu rival.",
			de: "Lege alle Energien von diesem Pokémon auf deinen Ablagestapel und lege 12 Schadensmarken auf 1 Pokémon deines Gegners.",
			it: "Scarta tutte le Energie da questo Pokémon e metti 12 segnalini danno su uno dei Pokémon del tuo avversario.",
			pt: "Descarte todas as Energias deste Pokémon e coloque 12 contadores de dano em 1 dos Pokémon do seu oponente."
		}
	}],

	retreat: 1,
	regulationMark: "I",

	thirdParty: {
		tcgplayer: 675910,
		cardmarket: 869709
	}
}

export default card