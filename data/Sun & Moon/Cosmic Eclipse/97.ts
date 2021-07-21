import { Card } from '../../../interfaces'
import Set from '../Cosmic Eclipse'

const card: Card = {
	name: {
		en: "Mimikyu",
		fr: "Mimiqui",
		es: "Mimikyu",
		it: "Mimikyu",
		pt: "Mimikyu",
		de: "Mimigma"
	},
	illustrator: "Yuka Morii",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		778,
	],
	hp: 70,
	types: [
		"Psychic",
	],

	stage: "Basic",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Shadow Box",
				fr: "Boîte Obscure",
				es: "Caja Sombría",
				it: "Scatola Oscura",
				pt: "Caixa Sombria",
				de: "Schattenkiste"
			},
			effect: {
				en: "Pokémon-GX that have any damage counters on them (both yours and your opponent’s) have no Abilities.",
				fr: "Les Pokémon-GX qui ont des marqueurs de dégâts (les vôtres et ceux de votre adversaire) n’ont pas de talent.",
				es: "Los Pokémon-GX que tengan algún contador de daño sobre ellos (tanto tuyos como de tu rival) no tienen ninguna habilidad.",
				it: "Le abilità dei Pokémon-GX che hanno dei segnalini danno, sia tuoi che del tuo avversario, non hanno effetto.",
				pt: "Os Pokémon-GX que tiverem algum contador de dano neles (seus e do seu oponente) não têm Habilidades.",
				de: "Pokémon-GX (deine und die deines Gegners), auf denen mindestens 1 Schadensmarke liegt, haben keine Fähigkeiten."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Colorless",
				"Colorless",
			],
			name: {
				en: "Tail Trickery",
				fr: "Queue Étourdissante",
				es: "Cola Engaño",
				it: "Confondicoda",
				pt: "Truques de Cauda",
				de: "Schweiftrick"
			},
			effect: {
				en: "Flip a coin. If heads, your opponent’s Active Pokémon is now Confused.",
				fr: "Lancez une pièce. Si c’est face, le Pokémon Actif de votre adversaire est maintenant Confus.",
				es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Confundido.",
				it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene confuso.",
				pt: "Jogue 1 moeda. Se sair cara, o Pokémon Ativo do seu oponente será Confundido.",
				de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt verwirrt."
			},
			damage: 20,

		},
	],


	retreat: 1,



}

export default card
