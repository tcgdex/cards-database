import { Card } from '../../../interfaces'
import Set from '../Vivid Voltage'

const card: Card = {
	name: {
		en: "Metagross",
		fr: "Métalosse",
		es: "Metagross",
		it: "Metagross",
		pt: "Metagross",
		de: "Metagross"
	},

	illustrator: "kawayoo",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,
	hp: 170,

	types: [
		"Metal",
	],

	evolveFrom: {
		en: "Metang",
		fr: "Métang"
	},

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Levitation Field",
				fr: "Champ de Lévitation",
				es: "Campo de Levitación",
				it: "Campo di Levitazione",
				pt: "Campo de Levitação",
				de: "Schwebefeld"
			},
			effect: {
				en: "Your Pokémon in play have no Retreat Cost.",
				fr: "Vos Pokémon en jeu n’ont pas de Coût de Retraite.",
				es: "Tus Pokémon en juego no tienen ningún Coste de Retirada.",
				it: "I tuoi Pokémon in gioco non hanno costo di ritirata.",
				pt: "Seus Pokémon em jogo não têm custo de Recuo.",
				de: "Deine Pokémon im Spiel haben keine Rückzugskosten."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Metal",
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Leg Quake",
				fr: "Piétinement Sismique",
				es: "Zancudida",
				it: "Arti Tellurici",
				pt: "Pernas Sísmicas",
				de: "Beinbeben"
			},
			effect: {
				en: "If the Defending Pokémon is an Evolution Pokémon, it can’t attack during your opponent’s next turn.",
				fr: "Si le Pokémon Défenseur est un Pokémon Évolutif, il ne peut pas attaquer pendant le prochain tour de votre adversaire.",
				es: "Si el Pokémon Defensor es un Pokémon Evolución, no puede atacar durante el próximo turno de tu rival.",
				it: "Durante il prossimo turno del tuo avversario, il Pokémon difensore non può attaccare se è un Pokémon Evoluzione.",
				pt: "Se o Pokémon Defensor for um Pokémon de Evolução, ele não poderá atacar durante o próximo turno do seu oponente.",
				de: "Wenn das Verteidigende Pokémon ein Entwicklungs-Pokémon ist, kann es während des nächsten Zuges deines Gegners nicht angreifen."
			},
			damage: 100,

		},
	],

	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	resistances: [
		{
			type: "Grass",
			value: "-30"
		},
	],

	retreat: 3,
	regulationMark: "D"
}

export default card
