import {Card} from "../../../interfaces"
import Set from "../neo4"

const card: Card = {
      set: Set,
      name: {
         en: "Larvitar",
         ja: "幼虫",
         fr: "Larvi",
         de: "Larvitar",
         es: "Larvito",
         it: "Larvitar",
         pt: "Larvitar",
      },

      rarity: "Common",
      category: "Pokemon",
      dexId: [246],
      hp: 40,
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
            en: "Flip a coin. If heads, the Defending Pokemon can't attack during your opponent's next turn. (Benching or evolving either Pokemon ends this effect.)",
            ja: "コインをひっくり返します。頭の場合、防衛ポケモンは相手の次のターン中に攻撃することはできません。 （どちらかのポケモンがこの効果を終了するか、ベンチまたは進化します。）",
            fr: "Retourner une pièce. Si les têtes, le Pokémon en défense ne peut pas attaquer pendant le prochain tour de votre adversaire. (Benching ou évolution de Pokémon termine cet effet.)",
            de: "Eine Münze drehen. Wenn Sie Köpfe haben, kann das verteidigende Pokemon während der nächsten Runde Ihres Gegners nicht angreifen. (BENCHING oder EVOLING ENDERUNG POKEMON beendet diesen Effekt.)",
            es: "Voltea una moneda. Si se dirige, el Pokémon defensor no puede atacar durante el próximo turno de tu oponente. (Benching o evolucionando o Pokémon termina este efecto).",
            it: "Capovolgi una moneta. Se la testa, il Pokemon in carica non può attaccare durante il prossimo turno del tuo avversario. (Panca o evolvendo Pokemon termina questo effetto.)",
            pt: "Vire uma moeda. Se as cabeças, o pokemon atual não pode atacar durante o próximo turno do seu oponente. (Bancho ou evolução de Pokemon termina esse efeito.)",
          },
        },
        {
          cost: ["Fighting", "Colorless"],
          name: {
            en: "Rock Throw",
            ja: "ロックスロー",
            fr: "Lancer du roche",
            de: "Felswurf",
            es: "Lanzamiento de roca",
            it: "Lancio di roccia",
            pt: "Arremesso de rochas",
          },
          damage: 20,
        },
      ],

      retreat: 1,

      variants: [
        {
          type: "normal",
        },
      ],
};
