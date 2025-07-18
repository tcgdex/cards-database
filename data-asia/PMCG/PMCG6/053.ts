import {Card} from "../../../interfaces"
import Set from "../PMCG6"

const card: Card = {
      set: Set,
      name: {
         en: "Sabrina's Alakazam",
         ja: "サブリナのアラカザム",
         fr: "Alakazam de Sabrina",
         de: "Sabrinas Alakazam",
         es: "Alakazam de Sabrina",
         it: "Sabrina's Alakazam",
         pt: "Alakazam de Sabrina",
      },

      rarity: "Holo Rare",
      category: "Pokemon",
      dexId: [65],
      hp: 80,
      types: ["Psychic"],
      stage: "Stage2",

      abilities: [
        {
          type: "Pokemon Power",
          name: {
            en: "Psylink",
            ja: "psylink",
            fr: "Psylin",
            de: "Psylink",
            es: "Psíquico",
            it: "Psylink",
            pt: "Psylink",
          },
          effect: {
            en: "Sabrina's Alakazam always has a copy of every attack your Psychic Pokmon in play have (including their Energy costs and anything else required in order to use those attacks, such as discarding Energy cards). This power can't be used if Sabrina's Alakazam is Asleep, Confused, or Paralyzed.",
            ja: "SabrinaのAlakazamには、PlayのPsychic Pokmonが持っているすべての攻撃のコピーが常にあります（エネルギーコストなど、エネルギーカードの廃棄などの攻撃を使用するために必要なものを含む）。サブリナのアラカザムが眠っている、混乱し、麻痺している場合、この力は使用できません。",
            fr: "L'Alakazam de Sabrina a toujours une copie de chaque attaque que votre pokmon psychique en jeu a (y compris leurs coûts énergétiques et tout ce qui est nécessaire pour utiliser ces attaques, comme la suppression des cartes d'énergie). Ce pouvoir ne peut pas être utilisé si l'Alakazam de Sabrina est endormi, confus ou paralysé.",
            de: "Sabrinas Alakazam hat immer eine Kopie jedes Angriffs, das Ihr psychisches Pokmon im Spiel hat (einschließlich ihrer Energiekosten und alles andere, was erforderlich ist, um diese Angriffe zu verwenden, wie z. B. Energiekarten). Diese Kraft kann nicht verwendet werden, wenn Sabrinas Alakazam schläft, verwirrt oder gelähmt ist.",
            es: "Alakazam de Sabrina siempre tiene una copia de cada ataque que tiene su Pokmon psíquico en juego (incluidos sus costos de energía y cualquier otra cosa requerida para usar esos ataques, como descartar cartas de energía). Este poder no se puede usar si Alakazam de Sabrina está dormido, confundido o paralizado.",
            it: "L'Alakazam di Sabrina ha sempre una copia di ogni attacco che i tuoi Pokmon psichici in gioco hanno (compresi i loro costi energetici e qualsiasi altra cosa richiesta per usare quegli attacchi, come scartare le carte energetiche). Questo potere non può essere usato se l'Alakazam di Sabrina è addormentato, confuso o paralizzato.",
            pt: "O Alakazam de Sabrina sempre tem uma cópia de todos os ataques que seus Pokmon psíquicos em jogo têm (incluindo seus custos de energia e qualquer outra coisa necessária para usar esses ataques, como descartar cartões de energia). Esse poder não pode ser usado se o Alakazam de Sabrina estiver dormindo, confuso ou paralisado.",
          },
      }],

      attacks: [
        {
          cost: ["Psychic", "Colorless", "Colorless", "Colorless"],
          name: {
            en: "Mega Burn",
            ja: "メガ・バーン",
            fr: "Méga brûlure",
            de: "Mega brennen",
            es: "Mega Burn",
            it: "Mega Burn",
            pt: "Mega queima",
          },
          effect: {
            en: "You can't use this attack during your next turn.",
            ja: "次のターン中にこの攻撃を使用することはできません。",
            fr: "Vous ne pouvez pas utiliser cette attaque pendant votre prochain tour.",
            de: "Sie können diesen Angriff in Ihrer nächsten Kurve nicht verwenden.",
            es: "No puedes usar este ataque durante tu próximo turno.",
            it: "Non puoi usare questo attacco durante il tuo prossimo turno.",
            pt: "Você não pode usar esse ataque durante o próximo turno.",
          },
          damage: 60,
        },
      ],

      retreat: 3,

      variants: [
        {
          type: "holo",
        },
      ],
};
