import { Card } from '../../../interfaces'
import Set from '../Unified Minds'

const card: Card = {
	name: {
		en: "Gumshoos",
		fr: "Argouste",
		es: "Gumshoos",
		it: "Gumshoos",
		pt: "Gumshoos",
		de: "Manguspektor"
	},
	illustrator: "Midori Harada",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		735,
	],
	hp: 100,
	types: [
		"Colorless",
	],
	evolveFrom: {
		en: "Yungoos",
		fr: "Manglouton",
	},
	stage: "Stage1",


	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Alert Headbutt",
				fr: "Réveil Coup d’Boule",
				es: "Cabezazo de Alerta",
				it: "Testata Prudente",
				pt: "Cabeçada Alerta",
				de: "Warnende Kopfnuss"
			},
			effect: {
				en: "If your opponent’s Active Pokémon is a Pokémon-GX or Pokémon-EX, this attack’s base damage is 30.",
				fr: "Si le Pokémon Actif de votre adversaire est un Pokémon-GX ou un Pokémon-EX, les dégâts de base de cette attaque sont de 30.",
				es: "Si el Pokémon Activo de tu rival es un Pokémon-GX o un Pokémon-EX, el daño básico de este ataque es de 30.",
				it: "Se il Pokémon attivo del tuo avversario è un Pokémon-GX o un Pokémon-EX, i danni base di questo attacco sono 30.",
				pt: "Se o Pokémon Ativo do seu oponente for um Pokémon-GX ou um Pokémon-EX, o dano base deste ataque será 30.",
				de: "Wenn das Aktive Pokémon deines Gegners ein Pokémon-GX oder Pokémon-EX ist, beträgt der Grundschaden dieser Attacke 30 Schadenspunkte."
			},
			damage: 90,

		},
	],
	weaknesses: [
		{
			type: "Fighting",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
