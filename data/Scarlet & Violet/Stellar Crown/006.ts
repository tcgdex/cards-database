import { Card } from "../../../interfaces"
import Set from "../Stellar Crown"

const card: Card = {
	dexId: [346],
	set: Set,

	name: {
		en: "Cradily",
		fr: "Vacilys",
		es: "Cradily",
		it: "Cradily",
		pt: "Cradily",
		de: "Wielie"
	},

	rarity: "Rare",
	category: "Pokemon",
	hp: 150,
	types: ["Grass"],
	stage: "Stage2",

	abilities: [{
		type: "Ability",

		name: {
			en: "Selective Slime",
			fr: "Mucus Sélectif",
			es: "Secreción Selectiva",
			it: "Muco Selettivo",
			pt: "Meleca Seletiva",
			de: "Selektiver Schleim"
		},

		effect: {
			en: "Once during your turn, you may flip a coin. If heads, choose Burned, Confused, or Poisoned. Your opponent's Active Pokémon is now affected by that Special Condition.",
			fr: "Une fois pendant votre tour, vous pouvez lancer une pièce. Si c'est face, choisissez entre Brûlé, Confus ou Empoisonné. Le Pokémon Actif de votre adversaire est maintenant affecté par cet État Spécial.",
			es: "Una vez durante tu turno, puedes lanzar 1 moneda. Si sale cara, elige entre Confundido, Envenenado o Quemado. El Pokémon Activo de tu rival pasa a estar afectado por esa Condición Especial.",
			it: "Una sola volta durante il tuo turno, puoi lanciare una moneta. Se esce testa, scegli tra bruciato, confuso e avvelenato. Il Pokémon attivo del tuo avversario è influenzato da quella condizione speciale.",
			pt: "Uma vez durante o seu turno, você poderá jogar uma moeda. Se sair cara, escolha entre Confuso, Envenenado e Queimado. O Pokémon Ativo do seu oponente agora está afetado por aquela Condição Especial.",
			de: "Einmal während deines Zuges kannst du 1 Münze werfen. Wähle bei Kopf Verbrennung, Vergiftung oder Verwirrung. Das Aktive Pokémon deines Gegners ist jetzt von jenem Speziellen Zustand betroffen."
		}
	}],

	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Miasma Wind",
			fr: "Vent Miasme",
			es: "Viento Miasma",
			it: "Vento Maleodorante",
			pt: "Vento Miasma",
			de: "Miasma"
		},

		effect: {
			en: "This attack does 100 damage for each Special Condition affecting your opponent's Active Pokémon.",
			fr: "Cette attaque inflige 100 dégâts pour chaque État Spécial affectant le Pokémon Actif de votre adversaire.",
			es: "Este ataque hace 100 puntos de daño por cada Condición Especial que afecte al Pokémon Activo de tu rival.",
			it: "Questo attacco infligge 100 danni per ogni condizione speciale che influenza il Pokémon attivo del tuo avversario.",
			pt: "Este ataque causa 100 pontos de dano para cada Condição Especial afetando o Pokémon Ativo do seu oponente.",
			de: "Diese Attacke fügt für jeden Speziellen Zustand, von dem das Aktive Pokémon deines Gegners betroffen ist, 100 Schadenspunkte zu."
		},

		damage: "100×"
	}],

	retreat: 3,
	regulationMark: "H",

	variants: {
		normal: false
	},

	illustrator: "miki kudo",

	thirdParty: {
		cardmarket: 785859
	}
}

export default card
