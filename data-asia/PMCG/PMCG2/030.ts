import {Card} from "../../../interfaces"
import Set from "../PMCG2"

const card: Card = {
      set: Set,
      name: {
         en: "Rhyhorn",
         ja: "Rhyhorn",
         fr: "Rhyhorn",
         de: "Rhyhorn",
         es: "Ranio",
         it: "Rhyhorn",
         pt: "Rhyhorn",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [111],
      hp: 70,
      types: ["Fighting"],
      stage: "Basic",

      attacks: [
        {
          cost: ["Colorless"],
          name: {
            en: "Leer",
            ja: "Leer",
            fr: "Lorgner",
            de: "Leer",
            es: "Mirada lasciva",
            it: "Leer",
            pt: "Leer",
          },
          effect: {
            en: "Flip a coin. If heads, the Defending Pokemon can't attack during your opponent's next turn. (Benching either Pokemon ends this effect.)",
            ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に攻撃することはできません。 （いずれかのポケモンがこの効果を終了するかのいずれかのベンチを作成します。）",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense ne peut pas attaquer pendant le prochain tour de votre adversaire. (Benching soit Pokémon termine cet effet.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, kann das verteidigende Pokemon während der nächsten Runde Ihres Gegners nicht angreifen. (BENCHING BEEDE POKEON ENDEN diesen Effekt.)",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor no puede atacar durante el próximo turno de tu oponente. (Benching O Pokemon termina este efecto).",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica non può attaccare durante il prossimo turno del tuo avversario. (Benching uno dei pokemon termina questo effetto.)",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual não pode atacar durante o próximo turno do seu oponente. (Becada de Pokemon termina esse efeito.)",
          },
          damage: None,
        },
        {
          cost: ["Fighting", "Colorless", "Colorless"],
          name: {
            en: "Horn Attack",
            ja: "ホーン攻撃",
            fr: "Attaque de corne",
            de: "Hornangriff",
            es: "Ataque",
            it: "Attacco del corno",
            pt: "Ataque de chifre",
          },
          damage: 30,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "normal",
        },
      ],
};
