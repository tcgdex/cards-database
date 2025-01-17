import { Card } from "../../../interfaces"
import Set from "../Prismatic Evolutions"

const card: Card = {
	set: Set,

	name: {
		en: "Iron Thorns ex",
		fr: "Épine-de-Fer-ex",
		es: "Ferropúas ex",
		pt: "Espinhos Férreos ex",
		it: "Spineferree-ex",
		de: "Eisendorn-ex"
	},

	rarity: "Double rare",
	category: "Pokemon",
	hp: 230,
	types: ["Lightning"],
	stage: "Basic",

	abilities: [{
		type: "Ability",

		name: {
			en: "Initialization",
			fr: "Initialiser",
			es: "Inicialización",
			pt: "Inicialização",
			it: "Formattazione",
			de: "Initialisierung"
		},

		effect: {
			en: "As long as this Pokémon is in the Active Spot, Pokémon with a Rule Box in play (both yours and your opponent's) have no Abilities, except for Future Pokémon. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)",
			fr: "Tant que ce Pokémon est sur le Poste Actif, les Pokémon ayant un encadré Règle en jeu (les vôtres et ceux de votre adversaire) n'ont pas de talent, à l'exception des Pokémon Temps futur. (Les Pokémon-ex, Pokémon-V, etc. ont des encadrés Règle.)",
			es: "Mientras este Pokémon esté en el Puesto Activo, los Pokémon con un recuadro de regla en juego (tanto tuyos como de tu rival) no tienen ninguna habilidad, excepto los Pokémon del futuro. (Pokémon ex, Pokémon V, etc. tienen recuadros de regla).",
			pt: "Enquanto este Pokémon estiver no Campo Ativo, Pokémon em jogo que tiverem uma Caixa de Regras (seus e do seu oponente) não terão Habilidades, exceto por Pokémon Futuristas. (Pokémon ex, Pokémon V, etc. têm Caixas de Regras.)",
			it: "Fintanto che questo Pokémon è in posizione attiva, i Pokémon in gioco che hanno una regola speciale, sia tuoi che del tuo avversario, non hanno abilità, a eccezione dei Pokémon Tempo Futuro. I Pokémon-ex, i Pokémon-V, ecc. hanno regole speciali.",
			de: "Solange dieses Pokémon in der Aktiven Position ist, haben Pokémon im Spiel (deine und die deines Gegners), die ein Regelfeld haben, keine Fähigkeiten, außer Pokémon aus der Zukunft. (Pokémon-ex, Pokémon-V usw. haben Regelfelder.)"
		}
	}],

	attacks: [{
		cost: ["Lightning", "Colorless", "Colorless"],

		name: {
			en: "Volt Cyclone",
			fr: "Cyclone Volt",
			es: "Ciclón Voltio",
			pt: "Ciclone de Volts",
			it: "Ciclonevolt",
			de: "Voltwirbelsturm"
		},

		effect: {
			en: "Move an Energy from this Pokémon to 1 of your Benched Pokémon.",
			fr: "Déplacez une Énergie de ce Pokémon vers l'un de vos Pokémon de Banc.",
			es: "Mueve 1 Energía de este Pokémon a uno de tus Pokémon en Banca.",
			pt: "Mova uma Energia deste Pokémon para 1 dos seus Pokémon no Banco.",
			it: "Sposta un'Energia da questo Pokémon a uno di quelli nella tua panchina.",
			de: "Verschiebe 1 Energie von diesem Pokémon auf 1 Pokémon auf deiner Bank."
		},

		damage: 140
	}],

	retreat: 4,
	regulationMark: "H",
	variants: {
		holo: true,
		normal: false
	}
}

export default card