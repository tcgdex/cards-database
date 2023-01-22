import { Card } from "../../../interfaces"
import Set from "../Crown Zenith"

const card: Card = {
	set: Set,

	name: {
		en: "Gumshoos",
		fr: "Argouste",
		es: "Gumshoos",
		it: "Gumshoos",
		pt: "Gumshoos",
		de: "Manguspektor"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		en: "Yungoos",
		fr: "Manglouton",
		es: "Yungoos",
		it: "Yungoos",
		pt: "Yungoos",
		de: "Mangunior"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Stakeout Headbutt",
			fr: "Filature Coup d'Boule",
			es: "Cabezazo Vigilante",
			it: "Testata di Sorveglianza",
			pt: "Cabeçada Vigilante",
			de: "Beschattungs-Kopfstoß"
		},

		effect: {
			en: "If your opponent's Active Pokémon moved from the Bench to the Active Spot during your opponent's last turn, this attack does 120 more damage.",
			fr: "Si le Pokémon Actif de votre adversaire a été déplacé du Banc vers le Poste Actif pendant le dernier tour de votre adversaire, cette attaque inflige 120 dégâts supplémentaires.",
			es: "Si el Pokémon Activo de tu rival se ha movido de la Banca al Puesto Activo durante el último turno de tu rival, este ataque hace 120 puntos de daño más.",
			it: "Se il Pokémon attivo del tuo avversario si è spostato dalla panchina in posizione attiva durante l'ultimo turno del tuo avversario, questo attacco infligge 120 danni in più.",
			pt: "Se o Pokémon Ativo do seu oponente foi movido do Banco para o Campo Ativo durante o último turno do seu oponente, este ataque causará 120 pontos de dano a mais.",
			de: "Wenn das Aktive Pokémon deines Gegners während des letzten Zuges deines Gegners von der Bank in die Aktive Position gewechselt ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Lunge Out",
			fr: "Allonger",
			es: "Arremeter",
			it: "Affondo Lungo",
			pt: "Bote",
			de: "Sprungangriff"
		},

		damage: 60
	}],

	retreat: 1,
	regulationMark: "F"
}

export default card