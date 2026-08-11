import { Card } from "models/database/card"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [346],
	set: Set,

	name: {
		'en-us': "Cradily",
		'fr-fr': "Vacilys",
		'es-es': "Cradily",
		'it-it': "Cradily",
		'pt-br': "Cradily",
		'de-de': "Wielie"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	evolveFrom: {
		'en-us': "Lileep",
		'fr-fr': "Lilia",
		'es-es': "Lileep",
		'it-it': "Lileep",
		'pt-br': "Lileep",
		'de-de': "Liliep"
	},
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			'en-us': "Selective Slime",
			'fr-fr': "Mucus Sélectif",
			'es-es': "Secreción Selectiva",
			'it-it': "Muco Selettivo",
			'pt-br': "Meleca Seletiva",
			'de-de': "Selektiver Schleim"
		},

		effect: {
			'en-us': "Once during your turn, you may flip a coin. If heads, choose Burned, Confused, or Poisoned. Your opponent's Active Pokémon is now affected by that Special Condition.",
			'fr-fr': "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, choisissez entre Brûlé, Confus ou Empoisonné. Le Pokémon Actif de votre adversaire est maintenant affecté par cet État Spécial.",
			'es-es': "Una vez durante tu turno, puedes lanzar 1 moneda. Si sale cara, elige entre Confundido, Envenenado o Quemado. El Pokémon Activo de tu rival pasa a estar afectado por esa Condición Especial.",
			'it-it': "Una sola volta durante il tuo turno, puoi lanciare una moneta. Se esce testa, scegli tra bruciato, confuso e avvelenato. Il Pokémon attivo del tuo avversario è influenzato da quella condizione speciale.",
			'pt-br': "Uma vez durante o seu turno, você poderá jogar uma moeda. Se sair cara, escolha entre Confuso, Envenenado e Queimado. O Pokémon Ativo do seu oponente agora está afetado por aquela Condição Especial.",
			'de-de': "Einmal während deines Zuges kannst du 1 Münze werfen. Wähle bei Kopf Verbrennung, Vergiftung oder Verwirrung. Das Aktive Pokémon deines Gegners ist jetzt von jenem Speziellen Zustand betroffen."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			'en-us': "Miasma Wind",
			'fr-fr': "Vent Miasme",
			'es-es': "Viento Miasma",
			'it-it': "Vento Maleodorante",
			'pt-br': "Vento Miasma",
			'de-de': "Miasma"
		},

		effect: {
			'en-us': "This attack does 100 damage for each Special Condition affecting your opponent's Active Pokémon.",
			'fr-fr': "Cette attaque inflige 100 dégâts pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
			'es-es': "Este ataque hace 100 puntos de daño por cada Condición Especial que afecte al Pokémon Activo de tu rival.",
			'it-it': "Questo attacco infligge 100 danni per ogni condizione speciale che influenza il Pokémon attivo del tuo avversario.",
			'pt-br': "Este ataque causa 100 pontos de dano para cada Condição Especial afetando o Pokémon Ativo do seu oponente.",
			'de-de': "Diese Attacke fügt für jeden Speziellen Zustand, von dem das Aktive Pokémon deines Gegners betroffen ist, 100 Schadenspunkte zu."
		},

		damage: "100×"
	}],

	weaknesses: [
		{
			type: "Fire",
			value: "×2",
		},
	],
	retreat: 3,
	regulationMark: "H",

	variants: [
		{
			type: "reverse",
			thirdParty: {
				cardmarket: 785859,
				tcgplayer: 567232
			}
		},
		{
			type: "holo",
			thirdParty: {
				cardmarket: 785859,
				tcgplayer: 567232
			}
		},
	],

	illustrator: "miki kudo",

}

export default card
