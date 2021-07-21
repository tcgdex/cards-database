import { Card } from '../../../interfaces'
import Set from '../SM Black Star Promos'

const card: Card = {
	name: {
		en: "Lucario",
		fr: "Lucario",
		es: "Lucario",
		it: "Lucario",
		pt: "Lucario",
		de: "Lucario"
	},
	illustrator: "Anesaki Dynamic",
	rarity: "Rare",
	category: "Pokemon",

	set: Set,
	dexId: [
		448,
	],
	hp: 120,
	types: [
		"Fighting",
	],
	evolveFrom: {
		en: "Riolu",
		fr: "Riolu",
	},
	stage: "Stage1",

	abilities: [
		{
			type: "Ability",
			name: {
				en: "Stance",
				fr: "Position",
				es: "Afirmación",
				it: "Forma Mentis",
				pt: "Em Posição",
				de: "Abwehrhaltung"
			},
			effect: {
				en: "When you play this Pokémon from your hand to evolve 1 of your Pokémon during your turn, you may prevent all effects of your opponent’s attacks, including damage, done to this Pokémon until the end of your opponent’s next turn.",
				fr: "Lorsque vous jouez ce Pokémon de votre main pour faire évoluer l’un de vos Pokémon pendant votre tour, vous pouvez éviter tous les effets des attaques de votre adversaire, y compris les dégâts, infligés à ce Pokémon jusqu’à la fin du prochain tour de votre adversaire.",
				es: "Cuando juegues este Pokémon de tu mano para hacer evolucionar a 1 de tus Pokémon durante tu turno, puedes evitar todos los efectos de los ataques de tu rival, incluido el daño, infligidos a este Pokémon durante el próximo turno de tu rival.",
				it: "Quando giochi questo Pokémon dalla tua mano per far evolvere uno dei tuoi Pokémon durante il tuo turno, puoi prevenire tutti gli effetti degli attacchi del tuo avversario, inclusi i danni, inflitti a questo Pokémon fino alla fine del prossimo turno del tuo avversario.",
				pt: "Quando você joga este Pokémon da sua mão para evoluir 1 dos seus Pokémon durante a sua vez de jogar, você poderá prevenir todos os efeitos dos ataques do seu oponente, incluindo dano, causados a este Pokémon até o final da próxima vez de jogar do seu oponente.",
				de: "Wenn du dieses Pokémon aus deiner Hand spielst, um 1 deiner Pokémon während deines Zuges zu entwickeln, kannst du bis zum Ende des nächsten Zuges deines Gegners alle Effekte von Attacken deines Gegners, einschließlich Schaden, die diesem Pokémon zugefügt werden, verhindern."
			},
		},
	],
	attacks: [
		{
			cost: [
				"Fighting",
				"Fighting",
				"Fighting",
			],
			name: {
				en: "Submarine Blow",
				fr: "Coup Sous-Marin",
				es: "Impacto Submarino",
				it: "Colpo Sottomarino",
				pt: "Golpe Submarino",
				de: "Unterseehieb"
			},

			damage: 120,

		},
	],
	weaknesses: [
		{
			type: "Psychic",
			value: "×2"
		},
	],

	retreat: 1,



}

export default card
