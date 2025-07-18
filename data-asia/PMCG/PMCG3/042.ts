import {Card} from "../../../interfaces"
import Set from "../PMCG3"

const card: Card = {
      set: Set,
      name: {
         en: "Ditto",
         ja: "同上",
         fr: "Idem",
         de: "Dito",
         es: "Ídem",
         it: "Idem",
         pt: "Idem",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [132],
      hp: 50,
      types: ["Colorless"],
      stage: "Basic",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Transform",
            ja: "変身",
            fr: "Transformer",
            de: "Verwandeln",
            es: "Transformar",
            it: "Trasformare",
            pt: "Transformar",
          },
          effect: {
            en: "If Ditto is your Active Pokmon, treat it as if it were the same card as the Defending Pokmon, including type, Hit Points, Weakness, and so on, except Ditto can't evolve, always has this Pokmon Power, and you may treat any Energy attached to Ditto as Energy of any type. Ditto isn't a copy of any other Pokmon while Ditto is Asleep, Confused, or Paralyzed.",
            ja: "DittoがアクティブなPokmonである場合、それが型、ヒットポイント、脱力感などを含む防御ポクモンと同じカードであるかのように扱います。同上は、他のポクモンのコピーではありません。",
            fr: "Si Ditto est votre Pokmon actif, traitez-le comme s'il s'agissait de la même carte que le Pokmon en défense, y compris le type, les points de vie, la faiblesse, etc., sauf que Ditto ne peut pas évoluer, a toujours cette puissance de Pokmon, et vous pouvez traiter toute énergie attachée à Ditto comme une énergie de tout type. Idem n'est pas une copie de tout autre pokmon tandis que Ditto est endormi, confus ou paralysé.",
            de: "Wenn dito Ihr aktives Pokmon ist, behandeln Sie es so, als wäre es die gleiche Karte wie das verteidigende Pokmon, einschließlich Typ, Trefferpunkte, Schwäche usw., außer dass dito sich nicht weiterentwickeln kann, hat diese Pokmon -Kraft immer und Sie können jede Energie, die an Ditto verbunden ist, als Energie des Typs behandelt. Das Gleiche gilt keines Kopie eines anderen Pokmon, während das Gleiche schläft, verwirrt oder gelähmt ist.",
            es: "Si ídem es su pokmon activo, trátelo como si fuera la misma tarjeta que el pokmon defensor, incluido el tipo, los puntos de golpe, la debilidad, etc., excepto que ídem no puede evolucionar, siempre tiene esta potencia de Pokmon, y puede tratar cualquier energía unida para ídem como energía de cualquier tipo. Ditto no es una copia de ningún otro Pokmon, mientras que Ditto está dormido, confundido o paralizado.",
            it: "Se Idem è il tuo Pokmon attivo, trattalo come se fosse la stessa carta del Pokmon in difesa, incluso il tipo, i punti ferita, la debolezza e così via, tranne che Ditto non può evolversi, ha sempre questa potenza di Pokmon e puoi trattare qualsiasi energia attaccata a Ditto come energia di qualsiasi tipo. Idem non è una copia di nessun altro Pokmon mentre Ditto è addormentato, confuso o paralizzato.",
            pt: "Se o idem é o seu Pokmon ativo, trate -o como se fosse o mesmo cartão que o Pokmon defensor, incluindo tipo, pontos de vida, fraqueza e assim por diante, exceto que o idem não pode evoluir, sempre tem esse poder de Pokmon e você pode tratar qualquer energia anexada ao idem como energia de qualquer tipo. O idem não é uma cópia de nenhum outro Pokmon enquanto o idem está dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
      ],

      retreat: 1,

      variants: [
        {
          type: "holo",
        },
      ],
};
