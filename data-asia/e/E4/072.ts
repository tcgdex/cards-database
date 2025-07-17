import {Card} from "../../../interfaces"
import Set from "../E4"

const card: Card = {
      set: Set,
      name: {
         en: "Umbreon - 072/088",
         ja: "Umbreon -072/088",
         fr: "Umbreon - 072/088",
         de: "Umbreon - 072/088",
         es: "Umbreon - 072/088",
         it: "Umbreon - 072/088",
         pt: "Umbreon - 072/088",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [197],
      hp: 70,
      types: ["Darkness"],
      stage: "Stage1",

      abilities: [
        {
          name: {
            en: "Dark Gaze",
            ja: "暗い視線",
            fr: "Regard sombre",
            de: "Dunkler Blick",
            es: "Mirada oscura",
            it: "Sguardo scuro",
            pt: "Olhar escuro",
          },
          effect: {
            en: "As long as Umbreon is your Active Pokmon, Benched Pokmon <em>(yours and your opponent's)</em> can't use Pok-Powers.",
            ja: "Umbreonがあなたのアクティブなポケモンである限り、ベンチ付きポケモン<em>（あなたとあなたの相手）</em>はPok-Powersを使用できません。",
            fr: "Tant que Umbreon est votre Pokémon actif, Pokemon <em> (le vôtre et celui de votre adversaire) </em> ne peut pas utiliser de pok-powers.",
            de: "Solange Umbreon Ihr aktives Pokémon ist, kann ein Bank-Pokemon <em> (Ihr und Ihr Gegner) </em> Pok-Powers nicht verwenden.",
            es: "Mientras Umbreon sea tu Pokémon activo, Pokemon Benched <em> (tuyo y tu oponente) </em> no puede usar Pok-Powers.",
            it: "Finché Umbreon è il tuo Pokemon attivo, Pokemon in panchina <em> (il tuo e il tuo avversario) </em> non può usare i powers.",
            pt: "Enquanto o Umbreon for seu Pokémon ativo, Pokemon com bancada <em> (o seu e o seu oponente) </em> não pode usar pok-pok.",
          },
      }],

      attacks: [
        {
          cost: ["Darkness", "Colorless"],
          name: {
            en: "Sharp Claws",
            ja: "鋭い爪",
            fr: "Griffes pointues",
            de: "Scharfe Krallen",
            es: "Afilados",
            it: "Artigli affilati",
            pt: "Garras afiadas",
          },
          effect: {
            en: "Flip a coin. If heads, this attack does 10 damage plus 30 more damage.",
            ja: "コインをひっくり返します。頭の場合、この攻撃は10ダメージに加えて30ダメージを与えます。",
            fr: "Retourner une pièce. Si la tête, cette attaque fait 10 dégâts plus 30 dégâts supplémentaires.",
            de: "Eine Münze drehen. Bei Köpfen verursacht dieser Angriff 10 Schäden plus 30 weitere Schäden.",
            es: "Voltea una moneda. Si se dirige, este ataque hace 10 daños más 30 más de daño.",
            it: "Capovolgi una moneta. Se le teste, questo attacco infligge 10 danni più 30 danni in più.",
            pt: "Vire uma moeda. Se as cabeças, esse ataque causará 10 danos mais 30 mais danos.",
          },
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
        {
          type: "holo",
          stamp: ["1st edition"],
        },
      ],
};
