import { Card } from '../../../interfaces'
import Set from '../Primal Clash'

const card: Card = {
	name: {
		en: "Gorebyss",
		fr: "Rosabyss",
		es: "Gorebyss",
		it: "Gorebyss",
		pt: "Gorebyss",
		de: "Saganabyss"
	},

	illustrator: "Kouki Saitou",
	rarity: "Rare",
	category: "Pokemon",
	set: Set,

	dexId: [
		368,
	],

	hp: 90,

	types: [
		"Water",
	],

	evolveFrom: {
		en: "Clamperl",
		fr: "Coquiperl",
		es: "Clamperl",
		it: "Clamperl",
		pt: "Clamperl",
		de: "Perlu"
	},

	stage: "Stage1",

	abilities: [
		{
			type: "Ancient Trait",
			name: {
				fr: "Croissance α",
				en: "α Growth",
				es: "{title}:",
				it: "{title}:",
				pt: "{title}:",
				de: "{title}:"
			},
			effect: {
				fr: "Lorsque vous attachez une carte Énergie de votre main à ce Pokémon (excepté à la suite d'une attaque, d'un talent ou d'une carte Dresseur), vous pouvez attacher 2 cartes Énergie au lieu d'une.",
				en: "When you attach an Energy card from your hand to this Pokémon (except with an attack, Ability, or Trainer card), you may attach 2 Energy cards.",
				es: "{title}: Cuando unas 1 carta de Energía de tu mano a este Pokémon (excepto con un ataque, habilidad o carta de Entrenador), puedes unir 2 cartas de Energía en vez de 1.",
				it: "{title}: Quando assegni una carta Energia a questo Pokémon dalla tua mano (a meno che non sia in conseguenza di un attacco, un'abilità o una carta Allenatore), puoi assegnare due carte Energia.",
				pt: "{title}: Quando você liga um card de Energia de sua mão neste Pokémon (exceto com um ataque, Habilidade ou card de Treinador), você pode ligar 2 cards de Energia.",
				de: "{title}: Wenn du 1 Energiekarte von deiner Hand an dieses Pokémon anlegst (außer auf Anweisung einer Attacke, Fähigkeit oder Trainerkarte), kannst du bis zu 2 Energiekarten anlegen."
			},
		},
	],

	attacks: [
		{
			cost: [
				"Water",
				"Colorless",
			],
			name: {
				en: "Psy Bolt",
				fr: "Choc Mental",
				es: "Rayo Psi",
				it: "Psico",
				pt: "Raio Psíquico",
				de: "Konfusion"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
				fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
				pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente será Paralisado.",
				de: "Wirf 1 Münze. Bei \"Kopf\" ist das Aktive Pokémon deines Gegners jetzt paralysiert."
			},
			damage: 30,

		},
	],

	weaknesses: [
		{
			type: "Grass",
			value: "×2"
		},
	],

	retreat: 1,

	thirdParty: {
		cardmarket: 273582
	}
}

export default card
