import { Card } from '../../../interfaces'
import Set from '../Unbroken Bonds'

const card: Card = {
	name: {
		en: "Vileplume",
		fr: "Rafflesia",
		es: "Vileplume",
		it: "Vileplume",
		pt: "Vileplume",
		de: "Giflor"
	},
	illustrator: "Suwama Chiaki",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		45,
	],
	hp: 140,
	types: [
		"Grass",
	],
	evolveFrom: {
		en: "Gloom",
		fr: "Ortide",
	},
	stage: "Stage2",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Varied Pollen",
				fr: "Pollens Variés",
				es: "Polen Variado",
				it: "Multipolline",
				pt: "Pólen Variado",
				de: "Vielseitiger Pollen"
			},
			effect: {
				en: "Once during your turn (before your attack), you may flip a coin. If heads, choose Asleep, Burned, Confused, or Poisoned. Your opponent’s Active Pokémon is now affected by that Special Condition.",
				fr: "Une seule fois pendant votre tour (avant votre attaque), vous pouvez lancer une pièce. Si c’est face, choisissez entre Brûlé, Confus, Empoisonné ou Endormi. Le Pokémon Actif de votre adversaire est maintenant affecté par cet État Spécial.",
				es: "Una vez durante tu turno (antes de tu ataque), puedes lanzar 1 moneda. Si sale cara, elige entre Confundido, Dormido, Envenenado o Quemado. El Pokémon Activo de tu rival pasa a estar afectado por esa Condición Especial.",
				it: "Una sola volta durante il tuo turno, prima di attaccare, puoi lanciare una moneta. Se esce testa, scegli tra addormentato, bruciato, confuso e avvelenato. Il Pokémon attivo del tuo avversario è influenzato da quella condizione speciale.",
				pt: "Uma vez durante a sua vez de jogar (antes de atacar), você pode jogar 1 moeda. Se sair cara, escolha entre Adormecido, Confuso, Envenenado e Queimado. O Pokémon Ativo do seu oponente agora está afetado por aquela Condição Especial.",
				de: "Einmal während deines Zuges (bevor du angreifst) kannst du 1 Münze werfen. Wähle bei Kopf Schlaf, Verbrennung, Vergiftung oder Verwirrung. Das Aktive Pokémon deines Gegners ist jetzt von jenem Speziellen Zustand betroffen."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Grass",
				"Grass",
				"Colorless",
			],
			name: {
				en: "Giant Bloom",
				fr: "Pousse Géante",
				es: "Floración Gigante",
				it: "Gigafioritura",
				pt: "Florescimento Gigante",
				de: "Riesenblüte"
			},
			effect: {
				en: "Heal 30 damage from this Pokémon.",
				fr: "Soignez 30 dégâts à ce Pokémon.",
				es: "Cura 30 puntos de daño a este Pokémon.",
				it: "Cura questo Pokémon da 30 danni.",
				pt: "Cure 30 pontos de dano deste Pokémon.",
				de: "Heile 30 Schadenspunkte bei diesem Pokémon."
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fire",
			value: "×2"
		},
	],

	retreat: 3,



}

export default card
