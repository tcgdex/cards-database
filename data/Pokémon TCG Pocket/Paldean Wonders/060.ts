import { Card } from "../../../interfaces";
import Set from "../Paldean Wonders";

const card: Card = {
  set: Set,
  name: {
		en: "Toedscruel",
		fr: "Terracruel",
		es: "Toedscruel",
		de: "Tenterra",
		it: "Toedscruel",
		pt: "Toedscruel",
		'es-mx': "Toedscruel"
  },
  illustrator: "Kouki Saitou",
  rarity: "Two Diamond",
  category: "Pokemon",
  hp: 120,
  types: ["Fighting"],
  dexId: [949],
  evolveFrom: {
		en: "Toedscool",
		fr: "Terracool",
		es: "Toedscool",
		de: "Tentagra",
		it: "Toedscool",
		pt: "Toedscool",
		'es-mx': "Toedscool"
  },
  description: {
    en: "It coils its 10 tentacles around prey and sucks out their nutrients, causing the prey pain. The folds along the rim of its head are a popular delicacy.",
  },
  stage: "Stage1",
  attacks: [
    {
      name: {
        en: "Stun Spore",
        fr: "Para-Spore",
        es: "Paralizador",
        'es-mx': "Paralizador",
        de: "Stachelspore",
        it: "Paralizzante",
        pt: "Esporos Atordoantes"
      },
      damage: "70",
      cost: ["Fighting", "Fighting", "Colorless"],
      effect: {
        en: "Flip a coin. If heads, your opponent's Active Pokémon is now Paralyzed.",
        fr: "Lancez une pièce. Si c'est face, le Pokémon Actif de votre adversaire est maintenant Paralysé.",
        es: "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival pasa a estar Paralizado.",
        'es-mx': "Lanza 1 moneda. Si sale cara, el Pokémon Activo de tu rival ahora está Paralizado.",
        de: "Wirf 1 Münze. Bei Kopf ist das Aktive Pokémon deines Gegners jetzt paralysiert.",
        it: "Lancia una moneta. Se esce testa, il Pokémon attivo del tuo avversario viene paralizzato.",
        pt: "Jogue uma moeda. Se sair cara, o Pokémon Ativo do seu oponente agora estará Paralisado."
      },
    },
  ],
  weaknesses: [
    {
      type: "Grass",
      value: "+20",
    },
  ],
  retreat: 2,
};

export default card;