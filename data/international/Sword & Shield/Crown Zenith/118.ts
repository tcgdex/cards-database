import { Card } from "models/database/card"
import Set from "../Crown Zenith"

const card: Card = {
	dexId: [735],
	set: Set,

	name: {
		'en-us': "Gumshoos",
		'fr-fr': "Argouste",
		'es-es': "Gumshoos",
		'it-it': "Gumshoos",
		'pt-br': "Gumshoos",
		'de-de': "Manguspektor"
	},

	illustrator: "Mizue",
	rarity: "Rare",
	category: "Pokemon",
	hp: 120,
	types: ["Colorless"],

	evolveFrom: {
		'en-us': "Yungoos",
		'fr-fr': "Manglouton",
		'es-es': "Yungoos",
		'it-it': "Yungoos",
		'pt-br': "Yungoos",
		'de-de': "Mangunior"
	},

	stage: "Stage1",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Stakeout Headbutt",
			'fr-fr': "Filature Coup d'Boule",
			'es-es': "Cabezazo Vigilante",
			'it-it': "Testata di Sorveglianza",
			'pt-br': "Cabeçada Vigilante",
			'de-de': "Beschattungs-Kopfstoß"
		},

		effect: {
			'en-us': "If your opponent's Active Pokémon moved from the Bench to the Active Spot during your opponent's last turn, this attack does 120 more damage.",
			'fr-fr': "Si le Pokémon Actif de votre adversaire a été déplacé du Banc vers le Poste Actif pendant le dernier tour de votre adversaire, cette attaque inflige 120 dégâts supplémentaires.",
			'es-es': "Si el Pokémon Activo de tu rival se ha movido de la Banca al Puesto Activo durante el último turno de tu rival, este ataque hace 120 puntos de daño más.",
			'it-it': "Se il Pokémon attivo del tuo avversario si è spostato dalla panchina in posizione attiva durante l'ultimo turno del tuo avversario, questo attacco infligge 120 danni in più.",
			'pt-br': "Se o Pokémon Ativo do seu oponente foi movido do Banco para o Campo Ativo durante o último turno do seu oponente, este ataque causará 120 pontos de dano a mais.",
			'de-de': "Wenn das Aktive Pokémon deines Gegners während des letzten Zuges deines Gegners von der Bank in die Aktive Position gewechselt ist, fügt diese Attacke 120 Schadenspunkte mehr zu."
		},

		damage: "30+"
	}, {
		cost: ["Colorless", "Colorless"],

		name: {
			'en-us': "Lunge Out",
			'fr-fr': "Allonger",
			'es-es': "Arremeter",
			'it-it': "Affondo Lungo",
			'pt-br': "Bote",
			'de-de': "Sprungangriff"
		},

		damage: 60
	}],

	weaknesses: [
		{
			type: "Fighting",
			value: "×2",
		},
	],
	retreat: 1,
	regulationMark: "F",


	description: {
		'en-us': "Patient by nature, this Pokémon loses control of itself and pounces when it spots its favorite meal—Rattata!",
	},

	

	variants: [
		{
			type: 'normal',
			thirdParty: {
				cardmarket: 691837,
				tcgplayer: 478154
			}
		},
		{
			type: 'reverse',
			thirdParty: {
				cardmarket: 691837,
				tcgplayer: 478154
			}
		},
	],
}

export default card
