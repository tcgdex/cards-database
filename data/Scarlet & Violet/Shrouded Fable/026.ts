import { Card } from "../../../interfaces"
import Set from "../Shrouded Fable"

const card: Card = {
	set: Set,

	name: {
		en: "Slither Wing",
		fr: "Rampe-Ailes",
		es: "Reptalada",
		it: "Alirasenti",
		pt: "Asa Rasteira",
		de: "Kriechflügel"
	},

	rarity: "Uncommon",
	category: "Pokemon",
	hp: 140,
	types: ["Fighting"],
	stage: "Basic",

	attacks: [{
		cost: ["Fighting", "Colorless"],

		name: {
			en: "Iron Smasher",
			fr: "Écrasement de Fer",
			es: "Golpe Férreo",
			it: "Ferreodistruzione",
			pt: "Triturador de Ferro",
			de: "Eisenschmetterer"
		},

		effect: {
			en: "If your opponent has any Future Pokémon in play, this attack does 120 more damage.",
			fr: "Si votre adversaire a au moins un Pokémon Temps futur en jeu, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si tu rival tiene algún Pokémon del futuro en juego, este ataque hace 120 puntos de daño más.",
			it: "Se il tuo avversario ha dei Pokémon Tempo Futuro in gioco, questo attacco infligge 120 danni in più.",
			pt: "Se o seu oponente tiver algum Pokémon Futurista em jogo, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn dein Gegner mindestens 1 Pokémon aus der Zukunft im Spiel hat, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "20+"
	}, {
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Smashing Wing",
			fr: "Aile Fracassante",
			es: "Ala Devastadora",
			it: "Ala Distruttiva",
			pt: "Asa Esmagadora",
			de: "Schmetterflügel"
		},

		effect: {
			en: "Discard 2 Energy from this Pokémon.",
			fr: "Défaussez 2 Énergies de ce Pokémon.",
			es: "Descarta 2 Energías de este Pokémon.",
			it: "Scarta due Energie da questo Pokémon.",
			pt: "Descarte 2 Energias deste Pokémon.",
			de: "Lege 2 Energien von diesem Pokémon auf deinen Ablagestapel."
		},

		damage: 130
	}],

	retreat: 3,
	regulationMark: "H"
}

export default card